import React, { useRef, useEffect, useState } from 'react';
import './Section.css';

const Contact = ({ id }) => {
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
            <h2 className="glow-text">Contact</h2>
            <p>Email: vasupradha.ramji@gmail.com</p>
            <p>LinkedIn: <a href="https://linkedin.com/in/vasupradha" target="_blank">Profile</a></p>
            <p>GitHub: <a href="https://github.com/vasup" target="_blank">Profile</a></p>
        </section>
    );
};

export default Contact;
