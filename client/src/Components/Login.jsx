import React from "react";
import styled from "styled-components";
import axios from "axios";
import {useState} from 'react';
import {  useNavigate } from "react-router-dom";
import forgotpassword from "./Forgotpassword"
import { Link } from "react-router-dom";
import {ClipLoader} from "react-spinners";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useUserContext } from "./UserProvider";
import imageupload from "./Imageupload"
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import App from "./Home";
import Main from "./Main";
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


const Login = ({isUserAuthenticated ,  setUserRoleOnLogin}) => {
  const x=2;
  const y=false;
  const { updateUser } = useUserContext();

const navigate=useNavigate();
const [isLoading, setIsLoading] = useState(false);
    const [user , setuser]=useState({
      email:"",
      password:""
    })
       
    const [type ,setType]=useState('password');
    const[icon,setIcon]=useState(VisibilityOffIcon);

       const handleChange=(e)=>{
        const {name , value}=e.target
        setuser({...user , [name]:value})

       }
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

     const Login= async(e)=>{
      e.preventDefault();
      try{
        setIsLoading(true);
        const res=await axios.post("http://localhost:9000/login" , user);

       
        const { accessToken, message , role } = res.data; // Corrected response destructuring
       

        if (message==="successful login") {
          sessionStorage.setItem("accessToken", `Bearer ${accessToken}`);
          sessionStorage.setItem("refreshToken", `Bearer ${res.data.refreshToken}`);
          
          if(role==="admin")
          setUserRoleOnLogin("admin");
          isUserAuthenticated(true)
          alert(res.data.message);
          
          updateUser({ email: user.email });
          navigate('/imageupload');
        } else {
          alert(res.data.message);
        }
        setIsLoading(false);
      } catch (error) {
        console.log('login error', error);
        alert(error.message);
      }
    
         

     }

     
     
     
  return (
    <Components>
      <Section>
              
            
        <TextFont>Login</TextFont>

     
      
        <Wrapper>


             
               
           
       <Inlinediv>
     
            <Label>Email</Label>
            <InputBox type="text" placeholder="Email" name="email" value={user.email}  onChange={handleChange}></InputBox>
            

</Inlinediv>
          

<Inlinediv>
            <Label>Password</Label>
            <InputBox  type={type} name="password" value={user.password}  onChange={handleChange}  placeholder="Password"></InputBox>

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

          <LoginButton onClick={Login}>Login</LoginButton>

            )}

          
          <Forgot><Linksection to="/forgotpassword"><Highlight>Forgot password</Highlight></Linksection>  </Forgot>
            
          <Line><h4>OR</h4></Line>
          
           <p>Don't have an account?<Linksection to="/signup"> <Highlight>Sign up</Highlight>  </Linksection></p>


           <p>By Login, you agree to the <Highlight>Terms & Conditions</Highlight> and acknowledge our <Highlight>Privacy Policy</Highlight></p>
        </Wrapper>
      </Section>
    </Components>
  );
};

export default Login;