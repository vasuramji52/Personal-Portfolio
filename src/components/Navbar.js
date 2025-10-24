import React from 'react';
import './Navbar.css';

const Navbar = ({ currentSection }) => {
    const links = [
        { id: 'home', label: 'Home' },
        { id: 'experience', label: 'Experience' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact Me' },
    ];

    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <div className="logo">Vasupradha Ramji</div>
                <ul className="nav-links">
                    {links.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                className={`nav-link ${currentSection === link.id ? 'active' : ''}`}
                                aria-current={currentSection === link.id ? 'page' : undefined}
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
