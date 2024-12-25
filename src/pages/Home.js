import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import Switch from "react-switch"; // Import Switch for theme toggle
import "../styles/Home.css";

const Home = ({ isDarkMode, handleToggle }) => {
    return (
        <div className="section home-container">
            <FaLaptopCode className="home-icon" />
            <h1 className="home-name">Abhishek Tiwari</h1>
            <div className="home-title">
                <Typewriter
                    options={{
                        strings: ["Software Developer", "Full-Stack Developer", "Java Developer"],
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        deleteSpeed: 30,
                    }}
                />
            </div>
            {/* Theme Switch Button */}
            <div className="theme-switch-container">
                <Switch
                    checked={isDarkMode}
                    onChange={handleToggle}
                    checkedIcon={
                        <span
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                fontSize: "16px",
                            }}
                        >
                            🌜
                        </span>
                    }
                    uncheckedIcon={
                        <span
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                fontSize: "16px",
                            }}
                        >
                            🌞
                        </span>
                    }
                    onColor="#333"
                    offColor="#ddd"
                />

            </div>
        </div>
    );
};

export default Home;
