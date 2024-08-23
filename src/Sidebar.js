// Sidebar.js

import React from 'react';


const Sidebar = ({ onSidebarClick }) => {
    const handleClick = (content) => {
        onSidebarClick(content);
    };
    const linkStyle = {
        display: 'block',
        padding: '0.5rem 1rem',
        textDecoration: 'none',
        color: '#333',
        borderBottom: '1px solid #ccc',
        transition: 'background-color 0.3s ease',
    };

    return (
        <div style={{
            width: '200px',
            height: '100vh',
            backgroundColor: '#f0f0f0',  // Light gray color for sidebar
            padding: '1rem',
            borderRight: '1px solid #ccc',
        }}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li>
                    <a href="#" style={linkStyle} onClick={() => handleClick('embed-code')}>Embed Code</a>
                </li>
                <li>
                    <a href="#" style={linkStyle} onClick={() => handleClick('retool-embed')}>Retool Embed</a>
                </li>
                <li>
                    <a href="#" style={linkStyle} onClick={() => handleClick('embed-parent-interaction')}>Embed/Parent Interaction</a>
                </li>
                {/* Add more sidebar links as needed */}
            </ul>
        </div>
    );
}

export default Sidebar;

