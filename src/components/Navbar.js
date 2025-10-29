import React from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = ({ currentSection }) => {
    const links = [
        { id: 'home', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact Me' },
    ];

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <div className="logo">Vasupradha Ramji</div>

                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    {links.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                className={`nav-link ${currentSection === link.id ? "active" : ""}`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
