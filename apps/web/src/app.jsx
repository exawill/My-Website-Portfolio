import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import MainContent from './components/MainContent.jsx';

function App() {
    const [activeSection, setActiveSection] = useState('hero');

    return (
        <Router>
            <div className="flex min-h-screen bg-background text-foreground selection:bg-primary/20">
                <Sidebar activeSection={activeSection} />
                <MainContent setActiveSection={setActiveSection} />
            </div>
        </Router>
    );
}

export default App;