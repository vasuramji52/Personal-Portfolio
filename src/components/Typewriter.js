import React, { useEffect, useState, useRef } from 'react';
import './Typewriter.css';

const Typewriter = ({
  words = [],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 1400,
  loop = true,
}) => {
  const [index, setIndex] = useState(0); // which word
  const [subIndex, setSubIndex] = useState(0); // which character
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  // Respect prefers-reduced-motion
  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  // Blink cursor
  useEffect(() => {
    if (prefersReducedMotion) {
      setBlink(false);
      return;
    }
    const iv = setInterval(() => setBlink((b) => !b), 530);
    return () => clearInterval(iv);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) {
      // if user prefers reduced motion, show static first word
      if (!mounted.current) return;
      setIndex(0);
      setSubIndex(0);
      setIsDeleting(false);
      return;
    }

    if (!mounted.current) return;

    const currentWord = words[index % words.length] || '';
    // if deleting
    if (isDeleting) {
      if (subIndex > 0) {
        const timeout = setTimeout(() => setSubIndex((s) => s - 1), deletingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // move to next word
        setIsDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }
    } else {
      // typing
      if (subIndex < currentWord.length) {
        const timeout = setTimeout(() => setSubIndex((s) => s + 1), typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // word finished, pause then delete (or move on if not looping)
        if (loop || index < words.length - 1) {
          const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
          return () => clearTimeout(timeout);
        }
      }
    }
  }, [subIndex, index, isDeleting, words, typingSpeed, deletingSpeed, pauseTime, loop, prefersReducedMotion]);

  const visible = words[index % words.length] ? words[index % words.length].slice(0, subIndex) : '';

  return (
    <span className="typewriter" aria-live="polite" aria-atomic="true">
      <span className="typewriter-text">{visible}</span>
      <span className={`typewriter-cursor ${blink ? 'blink' : ''}`}>|</span>
    </span>
  );
};

export default Typewriter;
