import React, { useState } from "react";
import "../styles/Projects.css";
import { FaGithub } from "react-icons/fa";

// Import images explicitly
import project1Image from "../assets/project1.png";
import project2Image from "../assets/project2.png";
import project3Image from "../assets/project3.png";
import project4Image from "../assets/project4.png";
import project5Image from "../assets/project5.png";

const projectData = [
    {
        id: 1,
        title: "Thrift-Trail",
        image: project1Image,
        description: "A personal portfolio website showcasing my skills and projects.",
        github: "https://github.com/your-github/portfolio",
    },
    {
        id: 2,
        title: "Food Market",
        image: project2Image,
        description: "An advanced e-commerce app with shopping cart and payment features.",
        github: "https://github.com/your-github/ecommerce",
    },
    {
        id: 3,
        title: "Tracking Hacked Websites",
        image: project3Image,
        description: "A real-time chat app with user authentication and group chat features.",
        github: "https://github.com/your-github/chat-app",
    },
    {
        id: 4,
        title: "My Portfolio",
        image: project4Image,
        description: "Lorem Ipsum",
        github: "https://github.com/your-github/chat-app",
    },
    {
        id: 5,
        title: "Bollywood Movie Recommender",
        image: project5Image,
        description: "Lorem Ipsum",
        github: "https://github.com/your-github/chat-app",
    },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const openProject = (project) => {
        setSelectedProject(project);
    };

    const closeProject = () => {
        setSelectedProject(null);
    };

    return (
        <div className="projects-container">
            <h1 className="projects-title">My Projects</h1>
            <div className="projects-grid">
                {projectData.map((project) => (
                    <div
                        key={project.id}
                        className="project-card"
                        style={{ backgroundImage: `url(${project.image})` }}
                        onClick={() => openProject(project)}
                    >
                        <div className="project-overlay">
                            <h2 className="project-title">{project.title}</h2>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for Project Details */}
            {selectedProject && (
                <div className="project-modal">
                    <div className="project-modal-content">
                        <span className="modal-close" onClick={closeProject}>
                            &times;
                        </span>
                        <img
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            className="modal-image"
                        />
                        <h2 className="modal-title">{selectedProject.title}</h2>
                        <p className="modal-description">{selectedProject.description}</p>
                        <a
                            href={selectedProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="modal-github-link"
                        >
                            <FaGithub /> View on GitHub
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
