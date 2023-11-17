import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import validator from "validator";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {ClipLoader} from "react-spinners";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

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
    background-color: red;
  }
  @media (${size.tablet}) {
    max-width: 600px;
  }
`;

const Section = styled.div`
  padding-bottom: 1rem;
`;

const Wrapper = styled.div`
  padding: 2px 35px;
  display: flex;
  flex-direction: column;
  & > button {
    margin-top: 20px;
    border-radius: 3rem;
  }
  & > button:hover {

  }
  & > p {
    text-align: center;
  }

  input {
    padding-left: 1.3rem;
  }
`;

const TextFont = styled.h1`
  text-align: center;
  padding-top: 0.8rem;
  color: #c780fa;
`;

const InputBox = styled.input`
  padding: 0.6rem;
  border-radius: 5rem;
  border: 2px solid #c780fa;
  &:hover {
    border: 2px solid #c780fa;
  }
`;

const SignButton = styled.button`
  text-transform: none;
  background: #c780fa;
  color: black;
  font-size: 16px;
  height: 48px;
  border-radius: 2px;

  border:none;
  &:hover{
   background:white;
   outline:3px solid aqua;
   border:none;

  }
`;

const Forgot = styled.div`
  text-align: right;
  margin-top: 13px;
`;

const Checkbox = styled.div`
  & > input[type="checkbox"] {
    accent-color: #c780fa;
  }
  & > input {
    height: 1.2rem;
    width: 1.9rem;
    position: relative;
    background-color: #2196f3;
  }
  & > label {
    position: absolute;
  }
`;

const Line = styled.div`
  & > h4 {
    display: flex;
    flex-direction: row;
  }
  & > h4:before,
  & > h4:after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #000;
    margin: auto;
  }
  font-size: 13px;
`;

const Linksection = styled(Link)`
  text-decoration: none;
`;

const Highlight = styled.span`
  color: orange;

  &:hover {
    color: red;
    text-decoration: underline orange;
  }
`;

const Label = styled.label`
  margin-left: 15px;
  padding-bottom: 5px;
`;

const Inlinediv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  position: relative;
  & > span {
    position: absolute;
    left: 21rem;
    bottom: 3px;
  }
  @media (${size.mobile}) {
    & > span {
      position: absolute;
      left: 15rem;
    }
  }
`;

let x = VisibilityOffIcon;

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(VisibilityOffIcon);
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleToggle = () => {
    if (type === "password") {
      setIcon(VisibilityIcon);
      setType("text");
    } else {
      setIcon(VisibilityOffIcon);
      setType("password");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = async (e) => {
    e.preventDefault();
    const { name, email, password, reEnterPassword } = user;
    
    if (!name || !email || password !== reEnterPassword) {
      alert("invalid input");
      return;
    }


    if (!validator.isEmail(email)) {
      alert("Invalid email address");
      return;
    }


    // const isStrongPassword = validator.isStrongPassword(password, {
    //   minLength: 8,
    //   minLowercase: 1,
    //   minUppercase: 1,
    //   minNumbers: 1,
    //   minSymbols: 1,
    // });


    // if (!validator.isStrongPassword(password, {
    //   minLength: 8,
    //   minLowercase: 1,
    //   minUppercase: 1,
    //   minNumbers: 1,
    //   minSymbols: 1,
    // })) {
    //   alert("Password is too weak. Please include:\n" +
    //     "- at least 8 characters\n" +
    //     "- at least one lowercase letter\n" +
    //     "- at least one uppercase letter\n" +
    //     "- at least one number\n" +
    //     "- at least one special character\n");
    //   return;
    // }

 

    if (name && email && password === reEnterPassword ) {
      setIsLoading(true);
      const res = await axios
        .post("http://localhost:9000/register", user)
        .then((res) => {
          setIsLoading(false);
         if(res.data.position==="failure")
         {

           alert(res.data.errors);
          
        }
         
        else{

          alert(res.data.message)
        }
            
         
        }) .catch((error) => {
        
          if (error.response) {
            console.error("Server Error Response Data:", error.response.data);
          }
          console.error("Axios Error:", error);
        });
       
    } else {
      alert("password not matched");
    }
  };

  return (
    <Components>
      <Section>
        <TextFont>Sign up</TextFont>
        <Wrapper>
      
          <Inlinediv>
            <Label>Name</Label>
            <InputBox
              type="text"
              name="name"
              value={user.name}
              placeholder="Name"
              onChange={handleChange}
            />
          </Inlinediv>
          <Inlinediv>
            <Label>Email</Label>
            <InputBox
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </Inlinediv>
          <Inlinediv>
            <Label>Password</Label>
            <InputBox
              type={type}
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <span onClick={handleToggle}>
              {x === icon ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </span>
          </Inlinediv>
          <Inlinediv>
            <Label>ReEnterPassword</Label>
            <InputBox
              type={type}
              name="reEnterPassword"
              placeholder="ReEnterPassword"
              onChange={handleChange}
            />
            <span onClick={handleToggle}>
              {x === icon ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </span>
          </Inlinediv>
          {passwordError && <p style={{ color: "red" , fontSize:"1.5rem"}}>{passwordError}</p>}

          {
            isLoading ? ( <ClipLoader
              type="Puff"
              color="#c780fa"
              height={50}
              width={50}
            />
          ) : (
            <SignButton onClick={register}>Signup</SignButton>
          )
          }
        
          <Line>
            <h4>OR</h4>
          </Line>
          <p>
            Already a User?{" "}
            <Linksection to="/login">
              <Highlight>Login</Highlight>{" "}
            </Linksection>
          </p>
          <p>
            By Signup, you agree to the <Highlight>Terms & Conditions</Highlight>{" "}
            and acknowledge our <Highlight>Privacy Policy</Highlight>
          </p>
        </Wrapper>
      </Section>
    </Components>
  );
};

export default Signup;