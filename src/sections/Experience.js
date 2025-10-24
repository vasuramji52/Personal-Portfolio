import React from "react";
import "./Experience.css";
import AnimatedSection from "../components/AnimatedSection.js";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const experiences = [
    {
        year: "Aug 2025 – Present",
        title: "WiSTEM Mentor",
        company: "University of Central Florida",
        location: "Orlando, FL",
        type: "Part-time",
        description:
            "Mentor for 12 first-year computer science students, providing academic guidance to strengthen technical foundations and support their transition into college-level coursework. Offered career advice on internships and research involvement.",
        icon: <FaGraduationCap />,
        skills: ["Mentorship", "Leadership", "Student Support"],
    },
    {
        year: "May 2025 – Aug 2025",
        title: "Software Engineering Intern",
        company: "Marriott Vacations Worldwide",
        location: "Orlando, FL",
        type: "Internship",
        description:
            "Contributed to enterprise-level API and cloud initiatives that strengthened my ability to work with large datasets and scalable systems. Gained hands-on experience with cloud deployment strategies during the ROSI migration to AWS.",
        icon: <FaBriefcase />,
        skills: ["RESTful APIs", "Splunk", "Anypoint Platform"],
    },
    {
        year: "Nov 2024 – May 2025",
        title: "Undergraduate Research Assistant – 3D CNNs for Myoelectric Systems",
        company: "University of Central Florida",
        location: "Orlando, FL",
        type: "Part-time",
        description:
            "Conducted research under Dr. Wen on 3D Convolutional Neural Networks for myoelectric systems, focusing on prosthetics and high-dimensional surface electromyography (HD-sEMG). Improved cross-subject generalization and reduced inference latency by 51.6%.",
        icon: <FaGraduationCap />,
        skills: ["PyTorch", "TensorFlow", "Machine Learning"],
    },
    {
        year: "Jul 2024 – Sep 2024",
        title: "Software Engineering Fellow",
        company: "Headstarter AI",
        location: "Remote",
        type: "Fellowship",
        description:
            "Developed and deployed 5 AI-driven full-stack applications integrating Firebase, React, OpenAI APIs, Clerk authentication, and Stripe payments. Focused on scalable backend architecture and performance optimization.",
        icon: <FaBriefcase />,
        skills: ["React", "Firebase", "OpenAI API"],
    },
];

// sort descending (latest first)
const sortedExperiences = [...experiences];

const Experience = () => {
    return (
        <section className="section">
            <h2 className="glow-text">My Experience</h2>
            <AnimatedSection stagger>
                <div className="timeline">
                    {sortedExperiences.map((exp, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-icon">{exp.icon}</div>
                            <div className="timeline-content">
                                <div className="timeline-year">{exp.year}</div>
                                <h3 className="timeline-title">{exp.title}</h3>
                                <h4 className="timeline-company">
                                    {exp.company} — <span>{exp.location}</span>
                                </h4>
                                <p className="timeline-type">{exp.type}</p>
                                <p className="timeline-description">{exp.description}</p>
                                <div className="timeline-skills">
                                    {exp.skills.map((skill, i) => (
                                        <span key={i} className="skill-tag">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </AnimatedSection>
        </section>
    );
};

export default Experience;
