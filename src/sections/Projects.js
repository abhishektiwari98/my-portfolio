import React from 'react';
import { Section } from '../components/Section';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Learning Management System',
    description: 'Developed using Java, NodeJS, and MySQL.',
    technologies: ['Java', 'NodeJS', 'MySQL'],
    github: 'https://github.com/your-repo',
    link: 'https://project-link.com',
  },
  {
    title: 'Food Market',
    description: 'Built with Java, NodeJS, React, and MySQL.',
    technologies: ['Java', 'NodeJS', 'React', 'MySQL'],
    github: 'https://github.com/your-repo',
    link: 'https://project-link.com',
  },
  {
    title: 'Tracking Hacked Websites Tool',
    description: 'Implemented with Python, NodeJS, and CSS.',
    technologies: ['Python', 'NodeJS', 'CSS'],
    github: 'https://github.com/your-repo',
    link: 'https://project-link.com',
  },
  {
    title: 'Cache Simulator',
    description: 'Created using Python and C++.',
    technologies: ['Python', 'C++'],
    github: 'https://github.com/your-repo',
    link: 'https://project-link.com',
  },
  {
    title: 'Bollywood Movie Recommender',
    description: 'Developed using Python, Pandas, Jupyter Notebook, and Numpy.',
    technologies: ['Python', 'Pandas', 'Jupyter Notebook', 'Numpy'],
    github: 'https://github.com/your-repo',
    link: 'https://project-link.com',
  },
];

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`;

const ProjectCard = styled.div`
  background-color: #222;
  color: #fff;
  border-radius: 8px;
  padding: 1rem;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const ProjectTitle = styled.h3`
  margin: 0 0 0.5rem 0;
`;

const ProjectDescription = styled.p`
  margin: 0 0 0.5rem 0;
`;

const ProjectTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const Technology = styled.span`
  background-color: #333;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const LinkIcon = styled.a`
  color: #00aced;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }
`;

const Projects = () => {
  return (
    <Section initial="hidden" animate="visible" transition={{ duration: 1 }}>
      <motion.h2>My Projects</motion.h2>
      <ProjectsContainer>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <div>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectTechnologies>
                {project.technologies.map((tech, idx) => (
                  <Technology key={idx}>{tech}</Technology>
                ))}
              </ProjectTechnologies>
            </div>
            <ProjectLinks>
              <LinkIcon href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </LinkIcon>
              <LinkIcon href={project.link} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt />
              </LinkIcon>
            </ProjectLinks>
          </ProjectCard>
        ))}
      </ProjectsContainer>
    </Section>
  );
};

export default Projects;
