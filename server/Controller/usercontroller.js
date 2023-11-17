import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from "../model/user.js"
import Token from '../model/token.js';
import Otp from '../model/otp.js';
import multer from "multer";
import sendEmail from '../Utils/sendEmail.js';
import Imagefile from '../model/image.js';
import path from 'path';
import Verifiytoken from '../model/verification.js';
import fs from 'fs';

dotenv.config();


export const loginuser = async (req, res) => {
  try {

    const { email, password } = req.body;
    const lowercaseEmail = email.toLowerCase();
    const user = await User.findOne({ email : lowercaseEmail});
    if (user) {
      if(user.status===true)
      {

      
      const isPasswordCorrect = bcrypt.compareSync(password, user.password);
      if (isPasswordCorrect) {
        const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_SECRET_KEY, { expiresIn: '15m' });
        const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_SECRET_KEY);

        const newToken = new Token({ token: refreshToken });
        await newToken.save();
           

        
            // res.cookie("jwttoken" ,accessToken , refreshToken , {
            //   expiresIn:'30min' , httpOnly:true
            // } ).status(200).json({message:"lOGGED IN SUCCESSFULLLY", accessToken: accessToken,
            // refreshToken: refreshToken,
            // email: user.email,
            // name: user.name,});
            if(email===process.env.ADMINEMAIL)
            {
              return res.json({
                accessToken: accessToken,
                refreshToken: refreshToken,
                email: user.email,
                name: user.name,
                message:"successful login",
                role:"admin"
              });
            }
            else{

              return  res.json({
                accessToken: accessToken,
                refreshToken: refreshToken,
                email: user.email,
                name: user.name,
                message:"successful login",
                role:"not authorise"
              });
            }
      } else {
        return res.json({ message: "Password didn't match" });
      }
    }else{
      res.json({message:"email is not verified"})
    } 
    
  }else {
      return res.json({ message: "User not registered" });
    }
  } catch (error) {
    return res.json({ error: error.message });
  }
};



export const logoutuser=async(req, res)=>{
     const token=req.body.token;
 
     await Token.deleteOne({token:token});
     res.json({msg:'logout successfull'});     
}







export const signupuser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
 
    const existingUser = await User.findOne({ email });
    if (existingUser && existingUser.status === true) {
      return res.json({ message: 'User already registered' });
    }



 
    
    const passwordValidation = {
      lowercase: /^(?=.*[a-z])/.test(password),
      uppercase: /^(?=.*[A-Z])/.test(password),
      digit: /^(?=.*\d)/.test(password),
      specialChar: /^(?=.*[@$!%*#?&^])/.test(password),
      length: password.length >= 8,
    };
  
    
    const invalidRequirements = [];
    for (const key in passwordValidation) {
      if (!passwordValidation[key]) {
        invalidRequirements.push(key);
      }
    }
    
  

     
      if (invalidRequirements.length > 0) {
        console.log("df");
        const errorMessages = invalidRequirements.map( (key) => {
          switch (key) {
            case 'lowercase':
              return 'Lowercase letters are missing. \n';
            case 'uppercase':
              return 'Uppercase letters are missing. \n';
            case 'digit':
              return 'Digits are missing.\n';
            case 'specialChar':
              return 'Special characters are missing. \n';
            case 'length':
              return 'Password length should be at least 8 characters. \n';
            default:
              return 'Invalid password criteria. \n';
          }
        });
    
        return res.json({ position: "failure", message: `Password does not meet the criteria. Missing: ${invalidRequirements.join(', ')}`, errors: errorMessages });
      }
    
  


    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      status: false,
    });
    await newUser.save();

    const verificationtoken = jwt.sign({ email }, process.env.VERIFICATIONTOKEN, {
      expiresIn: '10m',
    });

    const emailverify = new Verifiytoken({
      email: email,
      token: verificationtoken,
      expireIn: new Date().getTime() + 600 * 1000,
    });

    await emailverify.save().catch((error) => {
      console.error('Error while saving email verification token:', error);
      return res.status(500).json({ error: 'Internal server error' });
    });

    const subject = 'Your verification link';
    const text = `Please verify your email by clicking on the following link: http://localhost:3000/#/verify/${verificationtoken}`;
    
    if (sendEmail(email, subject, text)) {
      return res.json({ message: 'Verification Email sent to your mail' });
    } else {
      return res.json({ message: 'Email not sent' });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};





export const verifytokenbyuser = async (req, res) => {
  const { token } = req.params;
  
  jwt.verify(token, process.env.VERIFICATIONTOKEN, async (err, decoded) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        res.send("Email verification link has expired");
      } else {
        console.error("Error in token verification:", err);
        res.send("Email verification failed error in verification link");
      }
    } else {
      try {
        const savedToken = await Verifiytoken.findOne({ email: decoded.email }).sort({ expireIn: -1 });
        if (savedToken.token === token) {
         
          const statuscheck = await User.findOne({ email: decoded.email });
          if (statuscheck.status === false) {
            statuscheck.status = true;
            await statuscheck.save();
            res.send("Email verified successfully");
          } else {
            res.send("Email is already verified");
          }
        } else {
          
          res.send("Not verified");
        }
      } catch (error) {
        console.error("Error in fetching saved token:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });
};


















export const forgotpassword = async (req, res) => {
  try {
    const { email } = req.body;
    console.log("sdfsdf" , email)
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      let otpcode = Math.floor(Math.random() * 10000) + 1;
      let otpData = new Otp({
        email: req.body.email,
        code: otpcode,
        expireIn: new Date().getTime() + 300 * 1000,
      });
      await otpData.save();

      // Find the latest OTP data for the provided email
      const latestOtpData = await Otp.findOne({ email }).sort({ expireIn: -1 });

      if (!latestOtpData) {
        return res.json({ message: "No OTP data found for the provided email" });
      }

      res.json({ message: "Email is present", id: latestOtpData._id });
      const subject="Your OTP Code";
      const text=`Your OTP Code is: ${otpcode}`;
          sendEmail(email , subject , text );
    } else {
      res.json({ message: "Email is not present" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



export const Otpverification = async (req, res) => {
  const frontendCode = req.body.code;
  const otpid = req.body.id;
 

  try {
  
    const databasetotpcode=await Otp.findOne({_id: otpid});
      
 
    if (databasetotpcode.code===frontendCode) {
      const user_id_email=databasetotpcode.email
      const userid=await User.findOne({email: user_id_email})
   
      res.json({ message: "Code is correct"  ,
        id:userid._id });
    } 
    else {
      res.json({ message: "Code is not correct" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error while OTP checking", error });
  }
};










export const Changepassword=async(req, res)=>{
  const userid=req.body.id;
  const password=req.body.password;
   
    
  const passwordValidation = {
    lowercase: /^(?=.*[a-z])/.test(password),
    uppercase: /^(?=.*[A-Z])/.test(password),
    digit: /^(?=.*\d)/.test(password),
    specialChar: /^(?=.*[@$!%*#?&^])/.test(password),
    length: password.length >= 8,
  };

  
  const invalidRequirements = [];
  for (const key in passwordValidation) {
    if (!passwordValidation[key]) {
      invalidRequirements.push(key);
    }
  }
 


   
    if (invalidRequirements.length > 0) {
    
      const errorMessages = invalidRequirements.map( (key) => {
        switch (key) {
          case 'lowercase':
            return 'Lowercase letters are missing. \n';
          case 'uppercase':
            return 'Uppercase letters are missing. \n';
          case 'digit':
            return 'Digits are missing.\n';
          case 'specialChar':
            return 'Special characters are missing. \n';
          case 'length':
            return 'Password length should be at least 8 characters. \n';
          default:
            return 'Invalid password criteria. \n';
        }
      });
  
      return res.json({ position: "failure", message: `Password does not meet the criteria. Missing: ${invalidRequirements.join(', ')}`, errors: errorMessages });
    }
  
   const user=await User.findOne({_id:userid})
   try{
     
   
  if(user)
  {
        const hashedPassword=bcrypt.hashSync(password, 10);
        user.password=hashedPassword;
        await user.save();
        res.json({message:"success"})
  }
  else{
    res.json({message:"user id is not correct"})
  }
}catch(error)
{
  res.json({error:"error while password change", error});
}

  
}




export const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/Images');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname + "_" + Date.now() + path.extname(file.originalname));
  },
});


export const upload = multer({
  storage: storage,
});



export const uploadimage = async (req, res) => {
  const userEmail = req.body.email;
  console.log({ email: userEmail });

  Imagefile.create({ email: userEmail, image: req.file.filename })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
};

export const getImagesByEmail = async (req, res) => {
  const userEmail = req.params.email; // Access email from the request parameters
  console.log({ email: userEmail });

  Imagefile.find({ email: userEmail })
    .then((images) => {
      res.json(images);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
};



// Import necessary modules and models at the top of your file
// ...

export const deleteImage = async (req, res) => {
  const { email, image } = req.params;

  try {
    // Find and delete the image record from the Imagefile collection
    const deletedImage = await Imagefile.findOneAndDelete({ email, image });

    if (!deletedImage) {
      return res.status(404).json({ message: 'Image not found' });
    }

    // Use fs.unlink to delete the actual file from the server
    const imagePath = path.join('public/Images', deletedImage.image);
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error('Error deleting image file:', err);
      }
    });

    res.json({ message: 'Image deleted successfully' });
  } catch (error) {
    console.error('Error deleting image:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};