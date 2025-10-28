import React, { useRef, useEffect, useState } from 'react';
import './Projects.css';
import OutdoorsImg from '../assets/Outdoors.jpg';
import MentorImg from '../assets/MentorProfile.jpg';
import GestureRecognition_Research from '../assets/GestureRecognition_Research.pdf';
import NKnight from '../assets/NKnight.pdf';
import FlashWiz from '../assets/FlashWiz.png';
import MixerAI from '../assets/MixerAI.png';
import NKnights from '../assets/NKnights.png';
import ResearchPoster from '../assets/ResearchPoster.png';
import N_Knight_Solver from '../assets/N_Knights.c';


const projects = [
    {
        name: '3D CNN Gesture Recognition Research',
        shortDescription:
            'Optimized a 3D CNN for HD-sEMG gesture recognition, cutting inference latency by 51.6% and maintaining >0.95 F1-score through architectural refinements and cross-validation techniques.',
        description:
            'I optimized a 3D Convolutional Neural Network designed for high-density surface electromyography (HD-sEMG) gesture recognition, fine-tuning over 2.86 million trainable parameters to enhance the fluidity and responsiveness of prosthetic control systems. Through the careful refinement of convolutional layers, strategic use of max pooling, and targeted hyperparameter tuning, I achieved a 51.6% reduction in inference latency per batch while maintaining an F1-score exceeding 0.95. To ensure robustness and generalization across diverse subject datasets, I applied K-Fold Cross-Validation and pruning techniques, effectively balancing the trade-off between accuracy and performance while improving model consistency and reliability.',
        tags: ['PyTorch', 'Deep Learning', '3D CNN', 'HD-sEMG Signal Preprocessing', 'Python', 'Research'],
        image: ResearchPoster,
        link: GestureRecognition_Research,
    },
    {
        name: 'MixerAI',
        shortDescription:
            'AI-powered mixer tool integrating Spotify and OpenAI APIs that generates intelligent mixer settings, earning 2nd place at a 36-hour hackathon for creativity and technical execution.',
        description:
            'My team and I developed a full-stack web application that integrates the Spotify and OpenAI APIs to automatically generate optimized mixer settings for user-selected tracks, blending music analytics with generative AI. As the backend lead, I designed and implemented API workflows to efficiently fetch, store, and process Spotify metadata, enabling real-time responses through OpenAI’s model outputs. This project was awarded 2nd place in the First-Time Hackers category at a 36-hour hackathon, recognized for its creativity, technical depth, and seamless user experience.',
        tags: ['JavaScript', 'HTML', 'OpenAI API', 'Spotify API', 'Generative AI', 'Hackathon'],
        image: MixerAI,
        link: 'https://mixerai-indol.vercel.app',
        devpost: 'https://devpost.com/software/mixer-ai',
    },
    {
        name: 'Flashcard Wizard',
        shortDescription:
            'Smart flashcard generator built with React, Firebase, and OpenAI for topic-based study.',
        description:
            'I developed and deployed a flashcard generation web application that integrates multiple modern technologies, including the OpenAI API, Firebase, React, Stripe payment processing, Material UI, and Clerk for secure user authentication and sign-in management. The platform allows users to input topics and automatically generates relevant flashcards through OpenAI’s language model, providing a smooth and intuitive user experience, which is only elevated by the ease of navigation across dynamically constructed web pages using React Router.',
        tags: ['React.js', 'Firebase', 'OpenAI API', 'Stripe', 'Clerk', 'Full Stack'],
        image: FlashWiz,
        link: 'https://flashcard-wizard-sepia.vercel.app/',
    },
    {
        name: "N-Knight’s Chess Problem Solver",
        shortDescription:
            'Backtracking-based algorithmic solution for the N-Knights problem to compute optimal knight placements for any N×N board.',
        description:
            'I created a simulation of the N-Knight’s problem that can dynamically generate valid configurations for any given value of N on an N × N chessboard, determining the maximum number of knights that can be placed without attacking one another. The solver employs a hybrid of backtracking logic and dynamic programming to achieve concise and efficient execution, significantly reducing runtime even as data complexity scales. To complement the technical implementation, I composed and submitted a research paper outlining the project’s objectives, mathematical formulation, algorithmic process, results, and conclusions—highlighting both the computational efficiency and the theoretical foundations of the work.',
        tags: ['C', 'Algorithm Design', 'Backtracking', 'Research Paper'],
        image: NKnights,
        link: NKnight,
        code: N_Knight_Solver,
    },
];



const Projects = () => {
    const projectRefs = useRef([]);
    const [visible, setVisible] = useState([]);
    const [expanded, setExpanded] = useState({});

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

    const toggleExpand = (idx) => {
        setExpanded((prev) => ({
            ...prev,
            [idx]: !prev[idx],
        }));
    };

    return (
        <section id="projects" className="projects">
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

                            <p className={`project-description ${expanded[idx] ? 'expanded' : ''}`}>
                                {expanded[idx] ? proj.description : proj.shortDescription}
                            </p>

                            <button
                                className="read-more-btn"
                                onClick={() => toggleExpand(idx)}
                            >
                                {expanded[idx] ? 'Show Less' : 'Read More'}
                            </button>

                            <div className="project-tags">
                                {proj.tags.map((tag, i) => (
                                    <span key={i} className="tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="project-links">
                                {proj.link && (
                                    <a
                                        href={proj.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-btn"
                                    >
                                        {proj.link.endsWith('.pdf')
                                            ? 'View PDF'
                                            : 'View Application'}
                                    </a>
                                )}

                                {proj.devpost && (
                                    <a
                                        href={proj.devpost}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-btn"
                                    >
                                        View Devpost
                                    </a>
                                )}

                                {proj.code && (
                                    <a
                                        href={proj.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-btn"
                                    >
                                        View Source Code
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="project-image">
                            <img src={proj.image} alt={`${proj.name} preview`} />
                            <div className="image-overlay">
                                <span>
                                    {proj.link && proj.link.endsWith('.pdf')
                                        ? 'View PDF'
                                        : 'View Project'}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
