import React from "react";
import styled from "styled-components";
import axios from "axios";
import {useState} from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import otpverification from "./Otpverification";
import { Link } from "react-router-dom";
import {ClipLoader} from "react-spinners";
const size = {
  mobile: "max-width:425px",
  tablet: "max-width:768px",
  mobiles: "max-width:320px and max-width:400px",
};
const Components = styled.div`
  width: 450px;
  margin: 4rem auto;


  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);




  @media (${size.mobile}) {
   width: 350px;

 
  }
  @media (${size.mobiles}) {
    width: 300px;
    background-color:red;
 
  }
  @media (${size.tablet}) {
    max-width: 600px;
  }


`;
const Section = styled.div`
padding-bottom:1rem;
`;

const Wrapper = styled.div`
padding: 2px 35px;
display: flex;


flex-direction: column;
& > button{
    margin-top:20px;
    border-radius:3rem;
}
&>button:hover{
   
}
& > p 
{
 
  text-align:center;
}

input{
    padding-left:1.3rem;
}

  
`;
const TextFont = styled.h1`
  text-align: center;
  padding-top:0.8rem;
  color:#C780FA;
`;


const InputBox = styled.input`



  
  padding: 0.6rem;

  border-radius: 5rem;
  border: 2px solid #C780FA;
  &:hover {
    border: 2px solid #C780FA;
  }
`;

const LoginButton =styled.button`
text-transform: none;
background:#C780FA;
color: black;
font-size:16px;

height: 48px;
border-radius: 2px;
border:none;
&:hover{
  background:white;
  outline:3px solid aqua;
  border:none;

 }

`


const Forgot=styled.div`

text-align:right;
margin-top:13px;



  
`

const Checkbox =styled.div`

&>input[type=checkbox]{
    accent-color:#C780FA;
}
&>input{
    height:1.2rem;
    width:1.9rem;
    position:relative;
    background-color: #2196F3;
    
}
&>label{
   position:absolute;
 
}

`
const Line=styled.div`
  &>h4{
    display:flex;
    flex-direction:row;
  }
  &>h4:before,
  &>h4:after{
    content: "";
    flex: 1;
    border-bottom: 1px solid #000;
    margin: auto;
  }
  font-size:13px;
  
`
const Linksection =styled(Link)`

text-decoration:none;


`
const Highlight=styled.span`
color:orange;


  &:hover{
    color:red;
    text-decoration: underline orange;
  }


`


const Label=styled.label`

margin-left:15px;
padding-bottom:5px;


`
const Inlinediv=styled.div`

  display:flex;
  flex-direction:column;
  margin-bottom:20px;
  position:relative;
  &>span{
    position:absolute;
    left:21rem;
    bottom:3px;
  }
  @media (${size.mobile}){
    &>span{
        position:absolute;
        left:15rem;
    }
  }
`

const Forgotpassword = () => {
const navigate=useNavigate();
const [isLoading, setIsLoading] = useState(false);
    const [user , setuser]=useState({
      email:"",
  
    })
       
  

       const handleChange=(e)=>{
        const {name , value}=e.target
        setuser({...user , [name]:value})

       }
  

     const Login= async()=>{
      try{
        setIsLoading(true);
        console.log(user)
        const res=await axios.post("http://localhost:9000/forgotpassword" , user);


        const { message} = res.data; 
        console.log(message)
        const id=res.data.id;
        setIsLoading(false);
        if (message==="Email is present") {
     
       
          alert(message);
          
          navigate(`/otpverification/${id}`);
        } else {
          alert(message);
        }



      } catch (error) {
        console.log('forgot password  error', error);
        alert(error.message);
      }
    
         

     }
     
  return (
    <Components>
      <Section>
              
            
        <TextFont>Forgot password</TextFont>

     
      
        <Wrapper>


             
               
           
       <Inlinediv>
     
            <Label>Enter the  Email</Label>
            <InputBox type="text" placeholder="Email" name="email" value={user.email}  onChange={handleChange}></InputBox>
            

</Inlinediv>
          




        
            
{
  isLoading ? ( <ClipLoader
    type="Puff"
    color="#c780fa"
    height={50}
    width={50}
  />
) : (

          <LoginButton onClick={Login}>Continue</LoginButton>

)}

          
          
            
          <Line><h4>OR</h4></Line>
          
           <p>Don't have an account?<Linksection to="/signup"> <Highlight>Sign up</Highlight>  </Linksection></p>


           <p>By Login, you agree to the <Highlight>Terms & Conditions</Highlight> and acknowledge our <Highlight>Privacy Policy</Highlight></p>
        </Wrapper>
      </Section>
    </Components>
  );
};

export default Forgotpassword;
















// import React, {useState} from "react"

// import axios from "axios"


// const Login = () => {


//     const [ user, setUser] = useState({
//         email:"",
//         password:""
//     })

//     const handleChange = e => {
//         const { name, value } = e.target
//         setUser({
//             ...user,
//             [name]: value
//         })
//     }

//     const login = async () => {
//         try {
//           const res = await axios.post("http://localhost:9002/login", user);
//           const { token, message } = res.data;
//           if (token) {
//             // Save the token to local storage or state
//             localStorage.setItem("token", token);
//             alert(message);
//             console.log(token)
//             // Redirect or perform any necessary actions after successful login
//           } else {
//             alert(message);
//           }
//         } catch (error) {
//           console.error('Login error:', error);
//         }
//       };
      

//     return (
//         <div className="login">
//             <h1>Login</h1>
//             <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
//             <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
//             <div className="button" onClick={login}>Login</div>
//             <div>or</div>
//             <div className="button">Register</div>
//         </div>
//     )
// }

// export default Login