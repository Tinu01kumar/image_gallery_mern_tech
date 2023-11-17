

import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import HamburgerMenu from "./Hamburgermenu";
import Navigation from "./Navigation";
import { useRef } from "react";
import logo from "./logo.png";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const NavigationLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 18px;
  margin: 0 15px;
  cursor: pointer;
  position: relative;

  &:hover {
    text-decoration: none;
  }

  &:hover::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: red;
    animation: underlineAnimation 0.3s forwards;
  }

  @keyframes underlineAnimation {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }

  ${({ isCentered }) =>
    isCentered &&
    css`
      margin: 0 15px;
    `}
`;

const AuthLinks = styled.div`
  display: flex;
  align-items: center;
`;

const AuthLink = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 18px;
  margin: 0 10px;
  cursor: pointer;
`;

const Image = styled.img`
  height: 2rem;
  border-radius: 2rem;
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

const Adminbutton = styled.div`
  background-color: yellow;
  outline: 3px solid yellow;
  padding: 8px 18px;
  border-radius: 7px;
  &:hover {
    outline: 3px solid yellow;
    background-color: white;
    color: black;
  }
`;

const AdminHeader = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const menuRef = useRef(null);

 

  

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  const gotologin = () => {
    navigate("/login");
  };
  const gotosignup=()=>{
navigate("/signup")
  }

  const gotoadmin=()=>{
    navigate("/admin/api")
  }


  const isMobile = windowWidth <= 765;

  return (
    <Container>
      <Link to="/">
        <Image src={logo}></Image>{" "}
      </Link>
      {isMobile ? (
        <AuthLinks>
          <AuthLink >
            <Loginbutton onClick={gotologin}>Login</Loginbutton>
          </AuthLink>
          <AuthLink>
          <Signupbutton onClick={gotosignup}>Signup</Signupbutton>
          </AuthLink>

      
       
     
 
          <AuthLink >
          <Adminbutton onClick={gotoadmin}>Admin</Adminbutton>
        </AuthLink>
        
        
          <HamburgerMenu
            isOpen={menuOpen}
            toggleMenu={toggleMenu}
            closeMenu={closeMenu}
          />
        </AuthLinks>
      ) : (
        <>
          <AuthLinks>
            <AuthLink>
              <Loginbutton onClick={gotologin}>Login</Loginbutton>
            </AuthLink>
            <AuthLink>
              <Signupbutton onClick={gotosignup}>Signup</Signupbutton>
              
            </AuthLink>

           
            <AuthLink >
            <Adminbutton onClick={gotoadmin}>Admin</Adminbutton>
          </AuthLink>
          



          </AuthLinks>
        </>
      )}
      {isMobile && <Navigation isOpen={menuOpen} ref={menuRef} />}
    </Container>
  );
};

export default AdminHeader;
