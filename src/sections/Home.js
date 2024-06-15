import React from 'react';
import { Section } from '../components/Section';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Import icons
import bannerGif from '../assets/banner.gif'; // Import the GIF

const GifBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -2; /* Ensure it's behind the overlay and text */
`;

const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: -1; /* Ensure it's behind the text but above the video */
`;

const Title = styled(motion.h2)`
  color: white;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled(motion.p)`
  color: white;
  margin-bottom: 1rem;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const IconLink = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #00aced; /* Change color on hover */
  }
`;

const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Home() {
  return (
    <Section initial="hidden" animate="visible" transition={{ duration: 1 }} style={{ position: 'relative' }}>
      <GifBackground src={bannerGif} alt="Banner Background" />
      <Overlay>
        <Title variants={titleVariants}>Welcome to My Portfolio</Title>
        <Subtitle variants={subtitleVariants} transition={{ delay: 0.5 }}>
          Full-stack Software Engineer | Problem Solver | Tech Enthusiast
        </Subtitle>
        <IconContainer>
          <IconLink href="https://www.linkedin.com/in/abhishektiwari98/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </IconLink>
          <IconLink href="https://www.github.com/abhishektiwari98/" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </IconLink>
          <IconLink href="mailto:abhishektiwari.b@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </IconLink>
        </IconContainer>
      </Overlay>
    </Section>
  );
}

export default Home;
