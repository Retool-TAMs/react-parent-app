// App.js

import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import EmbedApp from './embedParentInteraction';

const App = () => {
    const [mainContent, setMainContent] = useState('Home'); // Initial content state

    const handleSidebarClick = (content) => {
        setMainContent(content);
    };

    return (
        <div className="App">
            <Header />
            <div style={{ display: 'flex' }}>
                <Sidebar onSidebarClick={handleSidebarClick} />
                <main style={{ padding: '1rem', flexGrow: 1 }}>
                    {/* Display different content based on mainContent state */}
                    {mainContent === 'embed-code' && (
                        <><p>Embeded app: https://tam.retool.dev/apps/afff5ec6-3307-11ef-a7da-1b4740d2e27e/Embedded%20Apps/Employees%20Embed?_embed=true</p><iframe src="https://tam.retool.dev/apps/afff5ec6-3307-11ef-a7da-1b4740d2e27e/Embedded%20Apps/Employees%20Embed?_embed=true" width="100%" height="800px"></iframe></>
                    )}
                    {mainContent === 'retool-embed' && (
                        <p>Coming soon :)</p>
                    )}
                    {mainContent === 'embed-parent-interaction' && (
                      <EmbedApp></EmbedApp>
                    )}
                    {/* Add more conditional rendering as needed */}
                </main>
            </div>
        </div>
    );
}

export default App;
