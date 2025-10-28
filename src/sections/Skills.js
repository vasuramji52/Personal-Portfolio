import React from 'react';
import './Skills.css';
import AnimatedSection from '../components/AnimatedSection.js';
import { FaCode, FaCubes, FaTools } from 'react-icons/fa';

const skillsData = [
    {
        title: 'Languages',
        icon: <FaCode />,
        items: ['Java', 'C', 'Python', 'JavaScript', 'HTML/CSS', 'TypeScript'],
    },
    {
        title: 'Frameworks & Libraries',
        icon: <FaCubes />,
        items: [
            'React.js',
            'Next.js',
            'Tailwind CSS',
            'PyTorch',
            'TensorFlow',
            'scikit-learn',
            'Matplotlib',
        ],
    },
    {
        title: 'Tools & Platforms',
        icon: <FaTools />,
        items: [
            'VS Code',
            'GitHub',
            'Postman',
            'Vercel',
            'Jira',
            'Jupyter Notebook',
            'Bitbucket',
            'Anypoint Platform',
            'Splunk',
            'AWS (Cloud Practitioner Certified)',
            'MySQL',
            'DynamoDB',
        ],
    },
];

const SkillsSection = () => {
    return (
        <section>
            <h2 className="glow-text">Technical Skills</h2>

            <AnimatedSection stagger>
                <div className="skills-section-container">
                    {skillsData.map((category, index) => (
                        <div
                            key={index}
                            className="skills-category fade-in"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="skills-header">
                                <span className="skills-icon">{category.icon}</span>
                                <h3>{category.title}</h3>
                            </div>
                            <ul className="skills-list">
                                {category.items.map((skill, i) => (
                                    <li
                                        key={i}
                                        className="skill-item"
                                        style={{ animationDelay: `${(i + 1) * 0.05}s` }}
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </AnimatedSection>
        </section>
    );
};

export default SkillsSection;
