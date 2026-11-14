import React, { useEffect, useState } from "react";

const sections = ["home", "about", "projects", "skills", "experience", "contact"];

const Navbar = ({ scrollToSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const updateActiveSection = () => {
            const current = sections.filter((id) => {
                const section = document.getElementById(id);
                return section && section.getBoundingClientRect().top <= window.innerHeight * 0.3;
            }).pop();
            setActiveSection(current || "home");
        };
        updateActiveSection();
        window.addEventListener("scroll", updateActiveSection, { passive: true });
        window.addEventListener("resize", updateActiveSection);
        return () => {
            window.removeEventListener("scroll", updateActiveSection);
            window.removeEventListener("resize", updateActiveSection);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const handleMenuClick = (section) => {
        setActiveSection(section);
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
                {sections.map((section) => (
                    <li key={section} className={activeSection === section ? "active" : ""}>
                        <button
                            type="button"
                            aria-current={activeSection === section ? "location" : undefined}
                            onClick={() => handleMenuClick(section)}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
