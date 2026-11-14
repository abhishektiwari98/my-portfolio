import React from "react";
import "../styles/Experience.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGoogle, FaHourglassHalf, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";

const experienceData = [
    {
        title: "Senior Software Engineer",
        company: "UNext Learning",
        linkedin: "https://www.linkedin.com/company/unext-learning/posts/?feedView=all",
        duration: "12.2025 - Present",
        location: "Bangalore, India",
        skills: ["JavaScript", "React.JS", "Angular", "Node.js", "AWS", "TypeScript", "HTML", "CSS"],
        icon: (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    fontSize: "25px",
                    fontWeight: "bold",
                    color: "#fff",
                }}
            >
                U
            </div>
        ),
        iconBg: "#166a73",
        color: "#fff",
    },
    {
        title: "Frontend Developer",
        company: "Wakura AI",
        linkedin: "https://www.linkedin.com/company/wakura-ai/",
        duration: "01.2025 - 08.2025",
        location: "Sunnyvale, California, USA",
        skills: ["JavaScript", "React.JS", "AWS", "TypeScript", "HTML", "CSS", "REST API"],
        icon: (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    fontSize: "25px",
                    fontWeight: "bold",
                    color: "#fff",
                }}
            >
                W
            </div>
        ),
        iconBg: "#3d3affff",
        color: "#000",
    },
    {
        title: "Graduate Research Assistant",
        company: "University of Texas at San Antonio",
        linkedin: "https://www.linkedin.com/school/the-university-of-texas-at-san-antonio/posts/?feedView=all",
        duration: "05.2022 - 08.2024",
        location: "San Antonio, Texas, USA",
        skills: ["Java", "Swift", "AWS", "Twilio Conversations", "Python", ".NET Core", "REST API"],
        icon: (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    fontSize: "25px",
                    fontWeight: "bold",
                    color: "#fff",
                }}
            >
                UT
            </div>
        ),
        iconBg: "#ff8316",
        color: "#000",
    },
    {
        title: "Senior Software Engineer",
        company: "Ntier Infotech",
        linkedin: "https://www.linkedin.com/company/ntier-infotech/",
        duration: "09.2019 - 10.2021",
        location: "Indore, India",
        skills: ["REST API", "SQL", "JavaScript", "Amazon S3", "Kubernets", "Java", "SQS", "Docker", "Python"],
        icon: (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    fontSize: "30px",
                    fontWeight: "bold",
                    color: "#fff",
                }}
            >
                N
            </div>
        ),
        iconBg: "#C70039",
        color: "#000",
    },
    {
        title: "Software Development Intern",
        company: "Google",
        linkedin: "https://www.linkedin.com/company/google/",
        duration: "04.2016 - 08.2016",
        location: "Remote, India",
        mapQuery: "India",
        skills: ["ETL", "Docker", "Kubernetes", "Go", "Google Cloud Platform (GCP)"],
        icon: <FaGoogle />, // Replaced hourglass with Angular icon
        iconBg: "#ffcc00",
        color: "#fff",
    },
];

const Experience = () => {
    return (
        <div className="experience-container">
            <h1 className="experience-title">Experience</h1>
            <VerticalTimeline>
                {experienceData.map((item, index) => (
                    <VerticalTimelineElement
                        key={index}
                        date={
                            <>
                                <span>{item.duration}</span>
                                {item.location && (
                                    <a
                                        className="experience-location"
                                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.mapQuery || item.location)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaMapMarkerAlt aria-hidden="true" /> {item.location}
                                    </a>
                                )}
                            </>
                        }
                        iconStyle={{ background: item.iconBg, color: item.color }}
                        icon={item.icon}
                    >
                        <h3 className="vertical-timeline-element-title">{item.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            {item.linkedin ? (
                                <a className="experience-company-link" href={item.linkedin} target="_blank" rel="noopener noreferrer">
                                    <FaBuilding aria-hidden="true" /> {item.company}
                                </a>
                            ) : item.company}
                        </h4>
                        <div className="skills-tags">
                            {item.skills.map((skill, idx) => (
                                <span key={idx} className="tag">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </VerticalTimelineElement>
                ))}
                {/* Hourglass icon at the end of the timeline */}
                <VerticalTimelineElement
                    iconStyle={{ background: "#f4b400", color: "#000" }}
                    icon={<FaHourglassHalf />}
                    contentStyle={{ display: "none" }}
                />
            </VerticalTimeline>
        </div>
    );
};

export default Experience;
