import React from 'react';
import './SideNav.css';

const SideNav = ({ sections, currentSection }) => {
    return (
        <div className="side-nav">
            {sections.map(sec => (
                <a
                    key={sec}
                    href={`#${sec}`}
                    className={currentSection === sec ? 'active' : ''}
                />
            ))}
        </div>
    );
};

export default SideNav;
