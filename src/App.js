import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//import SideNav from './components/SideNav';
import AnimatedSection from './components/AnimatedSection';

import Home from './sections/Home';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

import './App.css';

function App() {
  const sections = ['home', 'experience', 'skills', 'projects', 'contact'];
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    // Use IntersectionObserver + center-distance heuristic so the "current"
    // section is chosen as the one nearest the viewport center. This is
    // more robust than blindly setting the last entry that becomes
    // intersecting (which can result in flicker when multiple sections
    // overlap the threshold).
    console.debug('Initializing section observer for:', sections);

    const computeClosestSection = () => {
      let closest = null;
      let minDist = Infinity;
      const center = window.innerHeight / 2;
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const dist = Math.abs(elCenter - center);
        if (dist < minDist) {
          minDist = dist;
          closest = id;
        }
      });
      return closest;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.debug(
            `Observed ${entry.target.id}: isIntersecting=${entry.isIntersecting}, ratio=${entry.intersectionRatio.toFixed(2)}`
          );
        });

        const closestId = computeClosestSection();
        if (closestId) {
          console.debug('Closest section ->', closestId);
          setCurrentSection(closestId);
        }
      },
      { threshold: [0.1, 0.25, 0.5], rootMargin: '-10% 0px -10% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      console.debug(`Observing section ${id}, found: ${!!el}`);
      if (el) observer.observe(el);
    });

    const onScrollOrResize = () => {
      const closestId = computeClosestSection();
      if (closestId) setCurrentSection(closestId);
    };

    window.addEventListener('scroll', onScrollOrResize);
    window.addEventListener('resize', onScrollOrResize);

    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app-container">
      <Navbar currentSection={currentSection} />
      <div className="sections-container">
        <AnimatedSection id="home" className="section">
          <Home />
        </AnimatedSection>

        <AnimatedSection id="experience" className="section">
          <Experience />
        </AnimatedSection>

        <AnimatedSection id="skills" className="section">
          <Skills />
        </AnimatedSection>

        <AnimatedSection id="projects" className="section">
          <Projects />
        </AnimatedSection>

        <AnimatedSection id="contact" className="section">
          <Contact />
        </AnimatedSection>
      </div>
      <Footer />
    </div>
  );
}

export default App;
