import { Moon, Sun, Trophy, Calendar, Users, Home } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ darkMode, toggleDarkMode }) => {
    return (
        <nav className="navbar">
            <div className="nav-brand">
                <Trophy className="nav-logo" />
                <span>EPL LIVE</span>
            </div>
            <div className="nav-links">
                <a href="#home" className="nav-link active"><Home size={20} /> Home</a>
                <a href="#fixtures" className="nav-link"><Calendar size={20} /> Fixtures</a>
                <a href="#standings" className="nav-link"><Trophy size={20} /> Standings</a>
                <a href="#players" className="nav-link"><Users size={20} /> Players</a>
            </div>
            <button className="theme-toggle" onClick={toggleDarkMode}>
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
        </nav>
    );
};

export default Navbar;
