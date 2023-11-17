import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import Header from './Header';
import { useLocation } from 'react-router-dom';

import mainImage from './surprise.png';
import AdminHeader from './AdminHeader';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
`;

const CircleContainer = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: #e0e0e0;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const ContentContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 20px;
`;

const UpcomingSurprise = styled(animated.p)`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  color: #333; /* Choose a suitable text color */
`;

const AnimatedText = styled(animated.h1)`
  display: inline-block;
`;



const Main = ({userRole}) => {

  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });
  const scaleIn = useSpring({ transform: 'scale(1.2)', from: { transform: 'scale(0)' } });

  const textAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500, 
  });
  const renderHeader = () => {
    if (userRole === "admin") {
      return <AdminHeader />;
    } else {
      return <Header />;
    }
  };
  return (
    <>

    {renderHeader()}
      <Container>
        <CircleContainer style={scaleIn}>
          <Image src={mainImage} alt="Main Image" />
        </CircleContainer>
        <ContentContainer style={fadeIn}>
          <AnimatedText style={textAnimation}>
           
          </AnimatedText>
          <UpcomingSurprise>
            Stay tuned for an exciting surprise coming in the upcoming days!
          </UpcomingSurprise>
        </ContentContainer>
      </Container>
    </>
  );
};

export default Main;
