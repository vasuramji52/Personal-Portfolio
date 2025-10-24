import React, { useRef, useEffect, useState } from 'react';
import './Section.css';

const Experience = ({ id }) => {
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
            <h2 className="glow-text">Experience</h2>
            <p>
                Experience Overview
            </p>
        </section>
    );
};

export default Experience;
