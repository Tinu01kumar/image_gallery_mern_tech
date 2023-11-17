


import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const MenuButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  font-size: 24px;
`;

const HamburgerMenu = ({ isOpen, toggleMenu, closeMenu }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, closeMenu]);

  const handleIconClick = () => {
    if (isOpen) {
      closeMenu();
    } else {
      toggleMenu();
    }
  };

  return (
    <MenuButton ref={menuRef}>
      {isOpen ? <CloseIcon onClick={handleIconClick} /> : <MenuIcon onClick={handleIconClick} />}
   
    </MenuButton>
  );
};

export default HamburgerMenu;
