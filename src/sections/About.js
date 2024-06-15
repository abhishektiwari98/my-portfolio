import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import AboutGif from '../assets/about.gif';
import profilePic from '../assets/me.jpg';

const AboutSection = styled(Section)`
  position: relative;
  padding: 3rem 1rem;
  color: #333;
  overflow: hidden;
`;

const GifBackground = styled.img`
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
  padding: 2rem;
  border-radius: 10px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Title = styled(motion.h2)`
  margin-bottom: 1rem;
  color: #333;
`;

const Text = styled.p`
  margin-bottom: 1rem;
  color: #333;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Skill = styled.span`
  background-color: #333;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1rem;
`;

const About = () => {
  return (
    <AboutSection initial="hidden" animate="visible" transition={{ duration: 1 }}>
      <GifBackground src={AboutGif} alt="About Background" />
      <Content>
        <Title>About Me</Title>
        <ProfileImage src={profilePic} alt="Profile Picture" />
        <Text>
          I am a recent graduate from the University of Texas San Antonio, where I successfully
          completed my studies on a full-time basis. With a background as a full-stack Software
          Engineer at Ntier, I have honed my expertise in developing robust enterprise solutions
          tailored to the needs of small and medium-scale businesses. Recognized as a former
          open-source developer, I exude a deep passion for creating reliable and scalable solutions.
          Beyond my academic and professional pursuits, I find solace in the art of sketching,
          drawing, and enjoy the thrill of riding my motorcycle.
        </Text>
        <Title>Here are my skills</Title>
        <SkillsContainer>
          <Skill>Java</Skill>
          <Skill>Python</Skill>
          <Skill>Go</Skill>
          <Skill>JavaScript</Skill>
          <Skill>Scala</Skill>
          <Skill>SQL</Skill>
          <Skill>AWS</Skill>
          <Skill>Google Cloud</Skill>
        </SkillsContainer>
      </Content>
    </AboutSection>
  );
};

export default About;
