import React, { useRef, useEffect, useState } from 'react';
import './AnimatedSection.css';

const AnimatedSection = ({ children, id }) => {
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
            className={`animated-section ${visible ? 'fade-in' : 'fade-out'}`}
        >
            {children}
        </section>
    );
};

export default AnimatedSection;
