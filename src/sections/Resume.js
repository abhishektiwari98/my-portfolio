import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Section } from '../components/Section';
import ResumeVideo from '../assets/resume.mp4';
import ResumeImage from '../assets/Resume_Abhishek_Tiwari.png';

// Keyframes for moving icons animation
const moveIcons = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
`;

const ResumeSection = styled(Section)`
  position: relative;
  padding: 2rem 1rem; /* Adjusted padding */
  color: #333;
  overflow: hidden;
  height: 100vh; /* Ensure it takes full viewport height */
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const Content = styled.div`
  background: rgba(255, 255, 255, 0.8);
  padding: 1rem;
  border-radius: 10px;
  max-width: 450px; /* Further reduced max-width */
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  color: #333;
`;

const ResumeImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  img {
    max-width: 100%; /* Ensures it uses all available space */
    height: auto;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Button = styled.a`
  padding: 0.5rem 1rem; /* Reduced padding */
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 0.875rem; /* Reduced font size */
  cursor: pointer;
  text-decoration: none;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background-color: #555;
  }
`;

const Icon = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
  animation: ${moveIcons} 5s infinite;
`;

const Resume = () => {
  const [showModal, setShowModal] = useState(false);
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    // Generate random icons
    const iconUrls = [
      'https://path-to-icon1.png',
      'https://path-to-icon2.png',
      'https://path-to-icon3.png'
    ];
    const iconElements = iconUrls.map((url, index) => (
      <Icon
        key={index}
        src={url}
        style={{
          top: `${Math.random() * 80 + 10}%`,
          left: `${Math.random() * 80 + 10}%`
        }}
      />
    ));
    setIcons(iconElements);
  }, []);

  // const handleImageClick = () => {
  //   setShowModal(true);
  // };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <ResumeSection>
      <VideoBackground autoPlay loop muted>
        <source src={ResumeVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      {icons}
      <Content>
        <Title>My Resume</Title>
        <ResumeImageWrapper>
          <img src={ResumeImage} alt="Resume" /*onClick={handleImageClick}*/ />
        </ResumeImageWrapper>
        <Button href={ResumeImage} download="Resume_Abhishek_Tiwari.pdf">Download Resume</Button>
        {showModal && (
          <div className="modal" onClick={handleCloseModal}>
            <span className="close">&times;</span>
            <img className="modal-content" src={ResumeImage} alt="Resume" />
          </div>
        )}
      </Content>
    </ResumeSection>
  );
};

export default Resume;
