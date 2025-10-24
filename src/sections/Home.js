import React from 'react';
import './Section.css';
import profile from '../assets/MentorProfile.jpg';

const Home = ({ id }) => {
    return (
        <section className="section fade-in" id={id}>
            <img src={profile} alt="Profile" className="profile-pic" />
            <h1>Hello, I’m <span className="glow-text">Vasupradha Ramji</span></h1>
            <p>Computer Science student passionate about full-stack development, machine learning, and design.</p>
            <a href="#projects" className="cta-button">View My Work</a>
        </section>
    );
};

export default Home;
