import React from "react";
import styled from "styled-components";
import {useState} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {ClipLoader} from "react-spinners";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
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
let x=VisibilityOffIcon;


const Changepassword = () => {
const {id}=useParams();
  const navigate = useNavigate();
       const [user , setuser]=useState({
       
        password:"",
        reEnterPassword:""
       })
    const [type ,setType]=useState('password');
    const[icon,setIcon]=useState(VisibilityOffIcon);

    const [isLoading, setIsLoading] = useState(false);
    const handleToggle=()=>{    
        if(type==='password'){
          setIcon(VisibilityIcon);      
          setType('text');
        }
        else{
          setIcon(VisibilityOffIcon);     
          setType('password');
        }
      }
    
   const handleChange=(e)=>{
         const {name , value}=e.target
         setuser({
            ...user , [name]:value
         })
   }
     




   const register = async (e) => {
    e.preventDefault();
    const password = user.password;
    const reEnterPassword = user.reEnterPassword;
  
    try {
      setIsLoading(true);
      if (password === reEnterPassword) {
        const res = await axios.post(`http://localhost:9000/changepassword`, {
          id: id, // Include the 'id' field in the request body
          password: password,
        });
        setIsLoading(false);
        if (res.data.position === "failure") {
          alert(res.data.errors);
        } else if (res.data.message === "success") {
          alert("Password changed successfully");
          navigate("/login");
        } else {
          alert(res.data.message);
        }
      } else {
        alert("Both passwords do not match");

      }
      setIsLoading(false);
    } catch (error) {
      console.log("Error while changing the password", error);
      alert(error.message);
    }
  };
  



            
   
  return (
    <Components>
      <Section>
              
            
        <TextFont>Reset-Password</TextFont>

     
      
        <Wrapper>


             
               
    
     
          

<Inlinediv>
            <Label>Password</Label>
            <InputBox type={type} name="password" placeholder="Password"  onChange={handleChange}></InputBox>

            <span onClick={handleToggle}>  {x===icon ? <VisibilityOffIcon/>: <VisibilityIcon/>}</span>
            </Inlinediv>


            <Inlinediv>

            <Label>ReEnterPassword</Label>
            <InputBox type={type} name="reEnterPassword" placeholder="ReEnterPassword"  onChange={handleChange}></InputBox>

            <span onClick={handleToggle}>  {x===icon ? <VisibilityOffIcon/>: <VisibilityIcon/>}</span>
            </Inlinediv>


           




            {
              isLoading ? ( <ClipLoader
                type="Puff"
                color="#c780fa"
                height={50}
                width={50}
              />
            ) : (
            
     

          <LoginButton onClick={register}  >Change</LoginButton>
            )}


          
            
          <Line><h4>OR</h4></Line>
          
           <p>Already a User?<Linksection to="/login"> <Highlight>Login</Highlight>  </Linksection></p>


           <p>By Signup, you agree to the <Highlight>Terms & Conditions</Highlight> and acknowledge our <Highlight>Privacy Policy</Highlight></p>
        </Wrapper>
      </Section>
    </Components>
  );
};

export default Changepassword;








// App.js

// import React, { useState } from "react"

// import axios from "axios"


// const Signup = () => {

    

//     const [ user, setUser] = useState({
//         name: "",
//         email:"",
//         password:"",
//         reEnterPassword: ""
//     })

//     const handleChange = e => {
//         const { name, value } = e.target
//         setUser({
//             ...user,
//             [name]: value
//         })
//     }

//     const register = () => {
//         const { name, email, password, reEnterPassword } = user
//         if( name && email && password && (password === reEnterPassword)){
//             axios.post("http://localhost:9002/register", user)
//             .then( res => {
//                 alert(res.data.message)
                
//             })
//         } else {
//             alert("invlid input")
//         }
        
//     }

//     return (
//         <div className="register">
//             {console.log("User", user)}
//             <h1>Register</h1>
//             <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
//             <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
//             <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
//             <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
//             <div className="button" onClick={register} >Register</div>
//             <div>or</div>
//             <div className="button"  >Login</div>
//         </div>
//     )
// }

// export default Signup