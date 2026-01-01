import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import FixturesPage from './pages/FixturesPage'
import StandingsPage from './pages/StandingsPage'
import PlayersPage from './pages/PlayersPage'
import './App.css'

function App() {
    const [darkMode, setDarkMode] = useState(true);

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

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/fixtures" element={<FixturesPage />} />
                    <Route path="/standings" element={<StandingsPage />} />
                    <Route path="/players" element={<PlayersPage />} />
                </Routes>
            </main>

            <footer className="footer">
                <p>&copy; 2026 Ethiopian Premier League Live. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default App
