import React from 'react';
import './Section.css';
import profile from '../assets/Outdoors.jpg';
import Resume from '../assets/Resume.pdf';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Typewriter from '../components/Typewriter';

const Home = ({ id }) => {
    return (
        <section className="section fade-in" id={id}>
            <div className="about-content">
                <div className="about-text">
                    <h1 className="glow-text">Hi, I'm Vasupradha!</h1>
                    <Typewriter
                        words={[
                            'Aspiring Software Engineer',
                            'Computer Science Student',
                            'ML Enthusiast',
                            'Leader & Team Player',
                            'Bharatnatyam Dancer',
                            'Reader & Writer',
                            'Innovator',
                        ]}
                        typingSpeed={70}
                        deletingSpeed={40}
                        pauseTime={1400}
                    />

                    <p>
                        I’m a Computer Science student with a passion for full-stack development,
                        and machine learning. I love building projects that solve real-world problems
                        and enhance user experiences.
                    </p>

                    <div className="social-buttons">
                        <a
                            href="https://www.linkedin.com/in/vasupradha-ramji"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-button"
                        >
                            <FaLinkedin className="icon" /> LinkedIn
                        </a>
                        <a
                            href="https://github.com/vasuramji52"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-button"
                        >
                            <FaGithub className="icon" /> GitHub
                        </a>
                        <a
                            href="mailto:vasupradha.ramji@gmail.com"
                            className="cta-button"
                        >
                            <FaEnvelope className="icon" /> Email
                        </a>
                    </div>

                    <div className="resume-download">
                        <a href={Resume} download className="cta-button">
                            Download my Resume
                        </a>
                    </div>
                </div>

                <div className="about-image-container">
                    <img src={profile} alt="Profile" className="about-profile floating" />
                </div>
            </div>
        </section>
    );
};

export default Home;
