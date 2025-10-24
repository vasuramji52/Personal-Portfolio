import React, { useRef, useEffect, useState } from 'react';
import './Section.css';

const projectList = [
    { name: 'Project One', description: 'A web app that does amazing things.' },
    { name: 'Project Two', description: 'A machine learning project for predictions.' },
    { name: 'Project Three', description: 'A full-stack application with API integration.' }
];

const Projects = () => {
    const cardRefs = useRef([]);
    const [visible, setVisible] = useState([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, idx) => {
                    if (entry.isIntersecting) {
                        setVisible(prev => {
                            const newState = [...prev];
                            newState[idx] = true;
                            return newState;
                        });
                    }
                });
            },
            { threshold: 0.3 }
        );

        cardRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <h2 className="glow-text">Projects</h2>
            <p>
                Check out my projects!
            </p>
            <div className="projects-container">
                {projectList.map((proj, idx) => (
                    <div
                        key={idx}
                        ref={el => cardRefs.current[idx] = el}
                        className={`project-card ${visible[idx] ? 'fade-in' : 'fade-out'}`}
                    >
                        <h3>{proj.name}</h3>
                        <p>{proj.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Projects;
