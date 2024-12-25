import React, { useState } from "react";
import Switch from "react-switch";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar"; // Import the Navbar component

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

      {/* Theme Switch */}
      <div className="theme-switch">
        <Switch
          checked={isDarkMode}
          onChange={handleToggle}
          checkedIcon={<span>🌜</span>}
          uncheckedIcon={<span>🌞</span>}
          onColor="#333"
          offColor="#ddd"
        />
      </div>

      {/* Sections */}
      <div id="home" className="section">
        <Home />
      </div>
      <div id="about" className="section">
        <h1>About</h1>
        <p>This is the About section. Learn more about me here.</p>
      </div>
      <div id="projects" className="section">
        <h1>Projects</h1>
        <p>Check out my awesome projects here.</p>
      </div>
      <div id="skills" className="section">
        <h1>Skills</h1>
        <p>These are my technical skills and expertise.</p>
      </div>
      <div id="experience" className="section">
        <h1>Experience</h1>
        <p>Learn about my professional experience here.</p>
      </div>
      <div id="resume" className="section">
        <h1>Resume</h1>
        <p>View or download my resume here.</p>
      </div>
      <div id="contact" className="section">
        <h1>Contact</h1>
        <p>Get in touch with me here.</p>
      </div>
    </div>
  );
};

export default App;
