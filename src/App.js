import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects"; // Import Projects component
import Experience from "./pages/Experience"; // Import Experience component

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = (checked) => {
    setIsDarkMode(checked);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`app ${isDarkMode ? "dark" : "light"}`}>
      {/* Navbar */}
      <Navbar scrollToSection={scrollToSection} />

      {/* Resume Button */}
      <div className="controls">
        <a
          href="/resume_Abhishek.pdf" // File path points to the public folder
          download
          className="resume-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>


      {/* Sections */}
      <div id="home" className="section">
        <Home isDarkMode={isDarkMode} handleToggle={handleToggle} />
      </div>
      <div id="about" className="section">
        <About />
      </div>
      <div id="projects" className="section">
        <Projects /> {/* Render the Projects component */}
      </div>
      <div id="skills" className="section">
        <Skills /> {/* Render the Skills component */}
      </div>
      <div id="experience" className="section">
        <Experience /> {/* Render the Experience component */}
      </div>
      <div id="contact" className="section">
        <h1>Contact</h1>
        <p>Get in touch with me here.</p>
      </div>
    </div>
  );
};

export default App;
