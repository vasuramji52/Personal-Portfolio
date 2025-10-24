import React, { useRef, useEffect, useState } from 'react';
import './Section.css';

const About = ({ id }) => {
    const sectionRef = useRef();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.3 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id={id}
            ref={sectionRef}
            className={`section ${visible ? 'fade-in' : 'fade-out'}`}
        >
            <h2 className="glow-text">About Me</h2>
            <p>
                I am a passionate Computer Science student with experience in full-stack web development,
                machine learning, and API integrations. 
            </p>
        </section>
    );
};

export default About;
