import React from "react";
import { FaLaptopCode, FaGithub, FaLinkedin } from "react-icons/fa"; // Import GitHub and LinkedIn icons
import Typewriter from "typewriter-effect";
import "../styles/Home.css";

const Home = () => {
    return (
        <div className="section home-container">
            <FaLaptopCode className="home-icon" />
            <h1 className="home-name">Abhishek Tiwari</h1>
            <div className="home-title">
                <Typewriter
                    options={{
                        strings: ["MERN Stack Developer", "Software Engineer", "Data Engineer", "Full-Stack Developer", "Java Developer"],
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        deleteSpeed: 30,
                    }}
                />
            </div>
            {/* Social Icons */}
            <div className="social-icons">
                <a
                    href="https://github.com/abhishektiwari98"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon github"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://linkedin.com/in/abhishektiwari98"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon linkedin"
                >
                    <FaLinkedin />
                </a>
            </div>
        </div>
    );
};

export default Home;
