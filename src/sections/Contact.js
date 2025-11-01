import React, { useRef, useEffect, useState } from 'react';
import './Contact.css';
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = ({ id }) => {
    const sectionRef = useRef();
    const [visible, setVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.3 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // For now, open user's mail client with prefilled email (simple fallback)
        const mailto = `mailto:vasupradha.ramji@gmail.com?subject=Message%20from%20portfolio&body=${encodeURIComponent(
            `From: ${email}\n\n${message}`
        )}`;
        window.location.href = mailto;
    };

    return (
        <section ref={sectionRef} className={`${visible ? 'fade-in' : 'fade-out'}`}>
            <div className="section-content">
                <h2 className="glow-text">Let's Connect!</h2>

                <div className="contact-container">
                    <div className="contact-form">
                        <h3>Get in touch</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Your email</label>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Write a short message..."
                                    required
                                />
                            </div>

                            <button type="submit" className="submit-btn">Send message</button>
                        </form>
                    </div>

                    <div className="contact-details">
                        <div className="contact-card">
                            <FaEnvelope className="contact-icon" />
                            <h4>Email</h4>
                            <div className="contact-info">vasupradha.ramji@gmail.com</div>
                        </div>

                        <div className="contact-card">
                            <FaMapMarkerAlt className="contact-icon" />
                            <h4>Location</h4>
                            <div className="contact-info">Orlando, FL</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
