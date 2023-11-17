import React from 'react';
import imageslide from "./Images/slide_imge-removebg-preview.png";
import styled, { keyframes } from 'styled-components';

const slideInAnimation = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column; /* Updated to column for responsive layout */
  align-items: center;
  padding: 20px;
  justify-content: space-around;
  animation: ${slideInAnimation} 0.5s ease-out;

  @media (min-width: 720px) {
    flex-direction: row; /* Reset to row for larger screens */
  }
`;

const ContentContainer = styled.div`
  max-width: 600px;
  text-align: center;
  margin-bottom: 20px; /* Add margin for better spacing */
`;

const ImageContainer = styled.div`
  max-width: 100%;
  overflow: hidden;
  margin-top: 20px;
  animation: ${fadeInAnimation} 1s ease-out;

  @media (min-width: 720px) {
    margin-top: 0; /* Reset margin for larger screens */
    margin-left: 20px; /* Add margin for better spacing */
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Heading1 = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
  color: red;
  font-weight: 1000;
`;

const Heading2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const Imageuploadmainpage = () => {
  return (
    <MainContainer>
      <ContentContainer>
        <Heading1>Welcome to your Gallery</Heading1>
        <Heading2>
          Save your <span style={{ color: "#7752FE" }}>favorite</span> memory
        </Heading2>
      </ContentContainer>

      <ImageContainer>
        <Image src={imageslide} alt="Space Gallery" />
      </ImageContainer>
    </MainContainer>
  );
};

export default Imageuploadmainpage;
