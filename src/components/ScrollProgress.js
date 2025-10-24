import React, { useState, useEffect } from 'react';
import './ScrollProgress.css';

const ScrollProgress = () => {
    const [scroll, setScroll] = useState(0);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const height = document.body.scrollHeight - window.innerHeight;
        setScroll((scrollTop / height) * 100);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return <div className="scroll-progress" style={{ width: `${scroll}%` }} />;
};

export default ScrollProgress;
