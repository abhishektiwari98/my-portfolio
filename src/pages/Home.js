import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const Home = () => {
    return (
        <div className="section home-container">
            <FaLaptopCode className="home-icon" />
            <h1 className="home-name">Abhishek Tiwari</h1>
            <div className="home-title">
                <Typewriter
                    options={{
                        strings: ["Software Developer", "Full Stack Developer", "Java Developer"],
                        autoStart: true,
                        loop: true,
                        delay: 75, // Typing speed
                        deleteSpeed: 50, // Deleting speed
                    }}
                />
            </div>
        </div>
    );
};

export default Home;
