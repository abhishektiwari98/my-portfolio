import React, { useEffect, useRef, useState } from "react";
import "../styles/Skills.css";
import { Icon } from "@iconify/react";

// Skill icons from Iconify
const skillsData = [
    { name: "Java", icon: "skill-icons:java-dark" },
    { name: "CSS 3", icon: "vscode-icons:file-type-css" },
    { name: "JavaScript", icon: "logos:javascript" },
    { name: "Python", icon: "devicon:python" },
    { name: "GCP", icon: "devicon:googlecloud" },
    { name: "React", icon: "devicon:react" },
    { name: "Spring", icon: "devicon:spring" },
    { name: "Docker", icon: "skill-icons:docker" },
    { name: "MySQL", icon: "logos:mysql" },
];

const Skills = () => {
    const gridRef = useRef(null);
    const [hasEntered, setHasEntered] = useState(false);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setHasEntered(true);
            return;
        }
        const observer = new IntersectionObserver(([entry]) => {
            // Reset only when Skills is below the viewport, ready for a downward visit.
            if (entry.boundingClientRect.top > 0) {
                setHasEntered(entry.isIntersecting);
            }
        }, { rootMargin: "0px 0px -15% 0px", threshold: 0.1 });
        observer.observe(gridRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <h1 className="skills-title">Skills</h1>
            <div ref={gridRef} className={`skills-grid ${hasEntered ? "skills-entered" : "skills-pending"}`}>
                {skillsData.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <span className="skill-drop" style={{ "--drop-delay": `${index * 80}ms` }}>
                            <Icon icon={skill.icon} className="skill-icon" />
                        </span>
                        <p className="skill-name">{skill.name}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Skills;
