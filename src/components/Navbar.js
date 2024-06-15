import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { FaReact } from 'react-icons/fa';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: rgba(51, 51, 51, 0.9);
  color: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

const NavLink = styled(ScrollLink)`
  color: #fff;
  text-decoration: none;
  margin: 0 1rem;
  cursor: pointer;
  text-transform: uppercase; /* Make text uppercase */
  display: inline-block;
  transition: transform 0.3s ease, color 0.3s ease; /* Add color transition */

  &:hover {
    animation: ${bounce} 0.3s;
    color: #aaa; /* Change color on hover */
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0; /* Add vertical margin */
  }
`;

const NavHeader = styled.a`
  color: #fff;
  text-transform: uppercase; /* Make text uppercase */
  margin: 0;
  font-size: 1.5rem; /* Large text size */
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease; /* Add color transition */

  &:hover {
    animation: ${bounce} 0.3s;
    color: #aaa; /* Change color on hover */
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const floating = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(10px, -10px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const fastFloating = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(20px, -20px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
  animation: ${floating} ${({ duration }) => duration}s infinite;
  transition: animation 0.3s;

  &:hover {
    animation: ${fastFloating} 1s infinite;
  }

  @media (max-width: 768px) {
    top: ${({ top }) => top * 1.2}%;
    left: ${({ left }) => left * 1.2}%;
  }
`;

const icons = [
  { component: FaReact, top: 20, left: 15, duration: 5, size: 20 },
  { component: FaReact, top: 50, left: 30, duration: 8, size: 25 },
  { component: FaReact, top: 70, left: 70, duration: 6, size: 15 },
  { component: FaReact, top: 40, left: 10, duration: 7, size: 20 },
  { component: FaReact, top: 30, left: 50, duration: 9, size: 25 },
  { component: FaReact, top: 60, left: 80, duration: 6, size: 30 },
  { component: FaReact, top: 10, left: 85, duration: 7, size: 20 },
  { component: FaReact, top: 80, left: 40, duration: 8, size: 25 },
];

function Navbar({ handleSetActive }) {
  return (
    <Nav>
      <NavHeader href="https://www.linkedin.com/in/abhishektiwari98/" target="_blank">Abhishek Tiwari</NavHeader>
      <div>
        <NavLink to="home" smooth={true} duration={500} offset={-60} onSetActive={handleSetActive}>Home</NavLink>
        <NavLink to="about" smooth={true} duration={500} offset={-60} onSetActive={handleSetActive}>About Me</NavLink>
        <NavLink to="resume" smooth={true} duration={500} offset={-60} onSetActive={handleSetActive}>Resume</NavLink>
        <NavLink to="projects" smooth={true} duration={500} offset={-60} onSetActive={handleSetActive}>Projects</NavLink>
        <NavLink to="contact" smooth={true} duration={500} offset={-60} onSetActive={handleSetActive}>Contact</NavLink>
      </div>
      {icons.map((icon, index) => {
        const IconComponent = icon.component;
        return (
          <IconWrapper
            key={index}
            top={icon.top}
            left={icon.left}
            duration={icon.duration}
            style={{
              top: icon.top <= 30 ? `${icon.top + 10}%` : `${icon.top}%`,
              left: icon.left <= 30 ? `${icon.left + 10}%` : `${icon.left}%`
            }}
          >
            <IconComponent size={icon.size} color="#61dafb" />
          </IconWrapper>
        );
      })}
    </Nav>
  );
}

export default Navbar;
