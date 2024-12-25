import React from "react";

const Navbar = ({ scrollToSection }) => {
    return (
        <nav className="navbar">
            <ul>
                <li onClick={() => scrollToSection("home")}>Home</li>
                <li onClick={() => scrollToSection("about")}>About</li>
                <li onClick={() => scrollToSection("projects")}>Projects</li>
                <li onClick={() => scrollToSection("skills")}>Skills</li>
                <li onClick={() => scrollToSection("experience")}>Experience</li>
                <li onClick={() => scrollToSection("contact")}>Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;
