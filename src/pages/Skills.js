import React from "react";
import "../styles/Skills.css";
import { Icon } from "@iconify/react";

// Skill icons from Iconify
const skillsData = [
    { name: "Java", icon: "skill-icons:java-dark" },
    { name: "CSS 3", icon: "vscode-icons:file-type-css" },
    { name: "JavaScript", icon: "logos:javascript" },
    { name: "TypeScript", icon: "logos:typescript-icon" },
    { name: "Angular", icon: "logos:angular-icon" },
    { name: "Sass", icon: "logos:sass" },
    { name: "Bootstrap", icon: "logos:bootstrap" },
    { name: "C#", icon: "logos:c-sharp" },
    { name: "MySQL", icon: "logos:mysql" },
];

const Skills = () => {
    return (
        <>
            <h1 className="skills-title">Skills</h1>
            <div className="skills-grid">
                {skillsData.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <Icon icon={skill.icon} className="skill-icon" />
                        <p className="skill-name">{skill.name}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Skills;
