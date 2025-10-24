import React, { useRef, useEffect, useState } from 'react';
import './Projects.css';
import OutdoorsImg from '../assets/Outdoors.jpg';
import MentorImg from '../assets/MentorProfile.jpg';

const projects = [
    {
        name: 'Project One',
        description: 'A web app that does amazing things.',
        tags: ['React', 'API', 'CSS'],
        image: OutdoorsImg,
    },
    {
        name: 'Project Two',
        description: 'A machine learning project that predicts outcomes efficiently.',
        tags: ['Python', 'TensorFlow', 'Data Science'],
        image: MentorImg,
    },
    {
        name: 'Project Three',
        description: 'A full-stack application with advanced API integration.',
        tags: ['Node.js', 'Express', 'MongoDB', 'React.js'],
        image: OutdoorsImg,
    },
];

const Projects = () => {
    const projectRefs = useRef([]);
    const [visible, setVisible] = useState([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Find the index of the observed element in our refs array.
                    const i = projectRefs.current.indexOf(entry.target);
                    if (i === -1) return;

                    setVisible((prev) => {
                        const newState = [...prev];
                        newState[i] = entry.isIntersecting;
                        return newState;
                    });
                });
            },
            { threshold: 0.3 }
        );

        projectRefs.current.forEach((ref) => ref && observer.observe(ref));
        return () => observer.disconnect();
    }, []);

    //console.log("Loaded projects:", projects);

    // Dynamic scaling on scroll
    useEffect(() => {
        const handleScroll = () => {
            projectRefs.current.forEach((ref) => {
                if (!ref) return;
                const rect = ref.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const distanceFromCenter = Math.abs(rect.top + rect.height / 2 - windowHeight / 2);
                const maxDistance = windowHeight / 2;
                const scale = 1.05 - (distanceFromCenter / maxDistance) * 0.1;
                ref.style.transform = `scale(${Math.max(scale, 0.95)})`;
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // initial call
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="section">
            <h2 className="glow-text">Projects</h2>
            <p className="project-intro">
                Here are a few of my favorite projects — blending design, development, and creativity.
            </p>

            <div className="projects-grid">
                {projects.map((proj, idx) => (
                    <div
                        key={idx}
                        ref={(el) => (projectRefs.current[idx] = el)}
                        className={`project-card ${visible[idx] ? 'visible' : ''}`}
                        style={{ transitionDelay: `${idx * 0.15}s` }}
                    >
                        <div className="project-body">
                            <h3>{proj.name}</h3>
                            <p>{proj.description}</p>
                            <div className="project-tags">
                                {proj.tags.map((tag, i) => (
                                    <span key={i} className="tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="project-image">
                            <img src={proj.image} alt={`${proj.name} screenshot`} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
