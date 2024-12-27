import React from "react";
import "../styles/About.css";
import profileImage from "../assets/profile.jpg";
import profileVideo from "../assets/profile.mp4";
import JavaLogo from "../assets/java-logo.png";
import MongoLogo from "../assets/mongo-db.png";

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">About Me</h1>
            <div className="about-content">
                {/* Left Section: Photo Card */}
                <div className="about-photo-card">
                    <video
                        src={profileVideo}
                        className="about-photo"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    <div className="tech-icons">
                        <img
                            src={JavaLogo}
                            alt="Java"
                            className="tech-icon"
                        />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                            alt="React"
                            className="tech-icon"
                        />
                        <img
                            src={MongoLogo}
                            alt="MongoDB"
                            className="tech-icon"
                        />
                    </div>
                </div>

                {/* Right Section: Browser Mockup */}
                <div className="browser-mockup">
                    <div className="browser-header">
                        <span className="browser-dot red"></span>
                        <span className="browser-dot yellow"></span>
                        <span className="browser-dot green"></span>
                    </div>
                    <div className="browser-content">
                        <h2>Hi :)</h2>
                        <p>
                            👋 I'm Abhishek Tiwari, a Full-Stack Developer 💻 skilled in React ⚛️,
                            Node.js 🌐, and Spring Boot 🚀. I have expertise in cloud technologies ☁️ (AWS, GCP)
                            and databases like PostgreSQL 🐘 and MongoDB 🍃. I love creating scalable
                            solutions 📈 and building intuitive applications ✨ to solve complex problems.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
