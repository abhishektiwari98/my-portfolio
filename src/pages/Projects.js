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
        description: "A dynamic e-commerce platform using React and JavaScript, specializing in selling curated and restored pre-owned items. The platform features streamlined data flow and seamless backend integration, optimizing product restoration and listing management. Designed a responsive, user-friendly interface to enhance navigation and improve the overall customer experience.",
        github: "https://github.com/abhishektiwari98/thriftTrail",
    },
    {
        id: 2,
        title: "Food Market",
        image: project2Image,
        description: "A web application built using React and Spring Boot to help users make informed decisions about food products by providing insights on ingredients and potential allergens. It leverages AWS RDS with Postgres for secure backend storage, processes raw FDA data into actionable insights, and is deployed on Heroku for seamless access. The app ensures data security through environment-based credential handling and offers a user-friendly interface for a smooth experience.",
        github: "https://github.com/abhishektiwari98/foodmarket",
    },
    {
        id: 3,
        title: "Tracking Hacked Websites",
        image: project3Image,
        description: "A system to track and visualize data on hacked websites using Flask, Shodan, and Google Firestore, Python, backend development, and data visualization. We built features to extract data like IP addresses and attacker names, updating a Firestore database every three hours to generate real-time visualizations such as bar graphs and world maps. Deployed on Google App Engine, the app highlights expertise in data processing and creating dynamic, user-friendly web applications.",
        github: "https://github.com/hannah-felize/tracking-hacked-websites",
    },
    {
        id: 4,
        title: "My Portfolio",
        image: project4Image,
        description: "This portfolio showcases my projects and skills as a developer. It was built to provide a clear and engaging overview of my experience and abilities.",
        github: "https://github.com/abhishektiwari98/my-portfolio",
    },
    {
        id: 5,
        title: "Bollywood Movie Recommender",
        image: project5Image,
        description: "A movie recommendation engine that generates personalized suggestions based on user preferences.",
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
