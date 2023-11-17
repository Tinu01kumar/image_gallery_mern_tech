import React from 'react';
import styled from 'styled-components';

const NavMenu = styled.nav`
  position: fixed;
  top: 0;
  left: ${props => (props.isOpen ? '0' : '-50%')};
  width: 50%;
  height: 100vh;
  background-color: #f0f0f0;
  transition: left 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000; /* Ensure the menu is above other content */
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 18px;
  margin: 10px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Loginbutton = styled.div`
  background-color: red;
  color: white;
  padding: 9px 19px;
  border-radius: 8px;
  &:hover {
    outline: 3px solid red;
    color: black;
    background-color: white;
  }
`;

const Signupbutton = styled.div`
  background-color: aqua;
  outline: 3px solid aqua;
  padding: 8px 18px;
  border-radius: 7px;
  &:hover {
    outline: 3px solid aqua;
    background-color: white;
    color: black;
  }
`;
const Navigation = ({ isOpen }) => {
  const handleLinkClick = () => {
    // You can implement your navigation logic here
    // For now, let's just print a message to the console
    console.log("Navigating...");
  };

  return (
    <NavMenu isOpen={isOpen}>
    
     <NavLink>working on it</NavLink>
    </NavMenu>
  );
};

export default Navigation;





















