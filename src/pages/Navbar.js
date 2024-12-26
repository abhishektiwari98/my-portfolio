import React, { useState } from "react";

const Navbar = ({ scrollToSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const handleMenuClick = (section) => {
        scrollToSection(section);
        setIsMenuOpen(false); // Close menu after clicking
    };

    return (
        <nav className="navbar">
            {/* Hamburger Menu */}
            <div className="menu-icon" onClick={toggleMenu}>
                <div className={`hamburger ${isMenuOpen ? "open" : ""}`}></div>
            </div>

            {/* Navbar Links */}
            <ul className={`nav-links ${isMenuOpen ? "show" : ""}`}>
                <li onClick={() => handleMenuClick("home")}>Home</li>
                <li onClick={() => handleMenuClick("about")}>About</li>
                <li onClick={() => handleMenuClick("projects")}>Projects</li>
                <li onClick={() => handleMenuClick("skills")}>Skills</li>
                <li onClick={() => handleMenuClick("experience")}>Experience</li>
                <li onClick={() => handleMenuClick("contact")}>Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;
