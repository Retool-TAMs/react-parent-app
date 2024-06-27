import React from 'react';

const Header = () => {
    const headerStyle = {
        backgroundColor: '#e6e6fa',  // Light purple color
        padding: '1rem',
        textAlign: 'center',
    };

    const titleStyle = {
        color: '#333',  // Darker text color
    };

    return (
        <header style={headerStyle}>
            <h1 style={titleStyle}>Parent Application</h1>
            <nav>
                {/* Add navigation links if needed */}
            </nav>
        </header>
    );
}

export default Header;