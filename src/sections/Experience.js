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
        bullets: [
            "Mentor 12 first-year Computer Science students, providing academic and technical guidance to strengthen their programming foundations.",
            "Offer individualized mentorship on research involvement, internships, and professional development opportunities.",
            "Foster inclusivity and encourage collaboration for Women in STEM fields."
        ],
        icon: <FaGraduationCap />,
        skills: ["Mentorship", "Leadership", "Communication"],
    },
    {
        year: "May 2025 – Aug 2025",
        title: "Software Engineering Intern",
        company: "Marriott Vacations Worldwide",
        location: "Orlando, FL",
        type: "Internship",
        bullets: [
            "Promoted development for an internal tool by mapping dependencies across enterprise systems by analyzing 3,000+ API data points using Splunk and Anypoint Studio.",
            "Assisted in the ROSA migration to AWS, validating integrations and supporting cloud deployment configurations.",
            "Accelerated Identity Management and MFA initiatives by validating API endpoints in Postman and Anypoint Studio, creating 8 Jira stories to streamline Agile sprint delivery."
        ],
        icon: <FaBriefcase />,
        skills: ["RESTful APIs", "Splunk", "Jira", "AWS", "Anypoint Studio", "Agile Development"],
    },
    {
        year: "Nov 2024 – May 2025",
        title: "Undergraduate Research Assistant — Optimizing Gesture Recognition in 3D CNNs",
        company: "University of Central Florida",
        location: "Orlando, FL",
        type: "Research",
        bullets: [
            "Optimized a 3D Convolutional Neural Network for HD-sEMG gesture recognition across 2.86 million trainable parameters, enabling smoother and more responsive prosthetic control.",
            "Reduced inference latency per batch by 51.6% while maintaining an F1-score over 0.95 by refining convolutional layers, applying max pooling, and tuning hyperparameters, effectively balancing latency–accuracy trade-offs.",
            "Ensured model robustness and consistency across diverse subject datasets by applying K-fold Cross-Validation, Leave-One-Out Cross Validation, and pruning techniques, strengthening generalization and reliability."
        ],
        icon: <FaGraduationCap />,
        skills: ["PyTorch", "TensorFlow", "Deep Learning", "3D CNNs", "Model Optimization"],
    },
    {
        year: "Jul 2024 – Sep 2024",
        title: "Software Engineering Fellow",
        company: "Headstarter AI",
        location: "Remote",
        type: "Fellowship",
        bullets: [
            "Developed and deployed five AI-powered full-stack applications using React, Firebase, and OpenAI APIs to craft intuitive user interfaces.",
            "Integrated Clerk authentication and Stripe payments to enhance scalability and security across all projects.",
            "Implemented full-stack development best practices in scalable software design under mentorship from Amazon, Splunk, and Google engineers, enhancing expertise through industry-guided feedback."
        ],
        icon: <FaBriefcase />,
        skills: ["React.js", "Firebase", "OpenAI API", "Stripe", "Full-Stack Development"],
    },
];


// sort descending (latest first)
const sortedExperiences = [...experiences];

const Experience = () => {
    return (
        <section id ="experience" className = "experience-section">
            <h2 className="glow-text">My Experience</h2>
            <div className="timeline">
                {sortedExperiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                        <AnimatedSection key={index} stagger>
                            <div className="timeline-icon">{exp.icon}</div>
                            <div className="timeline-content">
                                <div className="timeline-year">{exp.year}</div>
                                <h3 className="timeline-title">{exp.title}</h3>
                                <h4 className="timeline-company">
                                    {exp.company} — <span>{exp.location}</span>
                                </h4>
                                <p className="timeline-type">{exp.type}</p>
                                <ul className="timeline-bullets">
                                    {exp.bullets.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                                <div className="timeline-skills">
                                    {exp.skills.map((skill, i) => (
                                        <span key={i} className="skill-tag">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
