import React, { useState } from 'react';
import { Section } from '../components/Section';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import ContactGif from '../assets/contact.gif';

const ContactSection = styled(Section)`
  position: relative;
  padding: 3rem 1rem;
  color: #333;
  overflow: hidden;
`;

const GifBackground = styled.img`
  position: absolute;
  top: 0;
  left: -10%; /* Move the GIF slightly to the left */
  width: 120%; /* Make the GIF slightly larger */
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const ContactContainer = styled.div`
  background: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Title = styled(motion.h2)`
  margin-bottom: 1rem;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  background: #fff;
  color: #333;

  &::placeholder {
    color: #999;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  background: #fff;
  color: #333;
  height: 150px;

  &::placeholder {
    color: #999;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background: #333;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: #555;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  span {
    margin-left: 0.5rem;
  }
`;

const DetailIcon = styled.div`
  font-size: 1.5rem;
  color: #333;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const SocialIconLink = styled.a`
  color: #333;
  font-size: 1.5rem;
  margin: 0 0.5rem;
  transition: color 0.3s;

  &:hover {
    color: #555;
  }
`;

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted:', { name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <ContactSection initial="hidden" animate="visible" transition={{ duration: 1 }}>
      <GifBackground src={ContactGif} alt="Contact background" />
      <ContactContainer>
        <Title>Contact Me</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextArea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></TextArea>
          <Button type="submit">Send Message</Button>
        </Form>
        <ContactDetails>
          <DetailItem>
            <DetailIcon>
              <FaEnvelope />
            </DetailIcon>
            <span>abhishektiwari.b@gmail.com</span>
          </DetailItem>
          <DetailItem>
            <DetailIcon>
              <FaPhone />
            </DetailIcon>
            <span>+1(669)-214-0645</span>
          </DetailItem>
        </ContactDetails>
        <SocialIcons>
          <SocialIconLink href="https://www.linkedin.com/in/abhishektiwari98/" target="_blank">
            <FaLinkedin />
          </SocialIconLink>
          <SocialIconLink href="https://www.github.com/abhishektiwari98/" target="_blank">
            <FaGithub />
          </SocialIconLink>
          <SocialIconLink href="https://twitter.com/yourprofile" target="_blank">
            <FaTwitter />
          </SocialIconLink>
        </SocialIcons>
      </ContactContainer>
    </ContactSection>
  );
}

export default Contact;
