import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Standings from './components/Standings'
import Fixtures from './components/Fixtures'
import './App.css'

function App() {
    const [darkMode, setDarkMode] = useState(true);
    const [activeTab, setActiveTab] = useState('home');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <div className="app-container">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

            <main className="main-content">
                <header className="page-header">
                    <h1>Ethiopian Premier League</h1>
                    <p>Real-time updates from the heart of Ethiopian football</p>
                </header>

                <div className="dashboard-grid">
                    <div className="stats-panel">
                        <Standings />
                    </div>
                    <div className="fixtures-panel">
                        <Fixtures />
                    </div>
                </div>
            </main>

            <footer className="footer">
                <p>&copy; 2026 Ethiopian Premier League Live. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default App
