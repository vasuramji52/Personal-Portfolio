import React, { useRef, useEffect } from 'react';
import './AnimatedSection.css';

const AnimatedSection = ({ children, id, className = '', style, stagger = false }) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('fade-in');
                    el.classList.remove('fade-out');

                    // Stagger children animations
                    if (stagger) {
                        const childElements = el.querySelectorAll(':scope > *');
                        childElements.forEach((child, index) => {
                            child.style.transitionDelay = `${index * 120}ms`;
                            child.classList.add('fade-in');
                        });
                    }
                } else {
                    el.classList.add('fade-out');
                    el.classList.remove('fade-in');

                    if (stagger) {
                        const childElements = el.querySelectorAll(':scope > *');
                        childElements.forEach((child) => {
                            child.style.transitionDelay = '0ms';
                            child.classList.remove('fade-in');
                        });
                    }
                }
            },
            { threshold: 0.05 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [stagger]);

    return (
        <div id={id} ref={sectionRef} className={`animated-section ${className}`} style={style}>
            {children}
        </div>
    );
};

export default AnimatedSection;
