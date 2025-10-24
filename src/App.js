import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SideNav from './components/SideNav';
import AnimatedSection from './components/AnimatedSection';
import ScrollProgress from './components/ScrollProgress';

import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

import './App.css';

function App() {
  const sections = ['home', 'about', 'projects', 'experience', 'contact'];
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      <ScrollProgress />
      <Navbar />
      <SideNav sections={sections} currentSection={currentSection} />
      <div className="sections-container">
        <AnimatedSection id="home">
          <Home />
        </AnimatedSection>

        <AnimatedSection id="about">
          <About />
        </AnimatedSection>

        <AnimatedSection id="projects">
          <Projects />
        </AnimatedSection>

        <AnimatedSection id="experience">
          <Experience />
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
