import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//import SideNav from './components/SideNav';
import AnimatedSection from './components/AnimatedSection';
import ScrollProgress from './components/ScrollProgress';

import Home from './sections/Home';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

import './App.css';

function App() {
  const sections = ['home', 'skills', 'projects', 'experience', 'contact'];
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    // Use a slightly lower threshold and a vertical rootMargin so sections
    // become 'current' when they enter the central portion of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-20% 0px -20% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      <ScrollProgress />
      <Navbar currentSection={currentSection} />
      <div className="sections-container">
        <AnimatedSection id="home">
          <Home />
        </AnimatedSection>

        <AnimatedSection id="experience">
          <Experience />
        </AnimatedSection>

        <AnimatedSection id="skills">
          <Skills />
        </AnimatedSection>

        <AnimatedSection id="projects">
          <Projects />
        </AnimatedSection>

        <AnimatedSection id="contact">
          <Contact />
        </AnimatedSection>
      </div>
      <Footer />
    </div>
  );
}

export default App;
