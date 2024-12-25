import React from "react";
import "../styles/About.css";
import profileImage from "../assets/profile.jpg"; // Replace with your actual image path

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">About Me</h1>
            <div className="about-content">
                {/* Left Section: Photo Card */}
                <div className="about-photo-card">
                    <img src={profileImage} alt="Profile" className="about-photo" />
                    <div className="tech-icons">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"
                            alt="Angular"
                            className="tech-icon"
                        />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                            alt="React"
                            className="tech-icon"
                        />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
                            alt="Vue"
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
                            👋 I'm Abhishek Tiwari. A passionate developer working with modern frameworks
                            like Angular, React, and Vue. I create awesome projects and enjoy solving complex
                            problems with elegant solutions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
