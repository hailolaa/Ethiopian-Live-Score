import { Moon, Sun, Trophy, Calendar, Users, Home } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ darkMode, toggleDarkMode }) => {
    return (
        <nav className="navbar">
            <div className="nav-brand">
                <Trophy className="nav-logo" />
                <span>EPL LIVE</span>
            </div>
            <div className="nav-links">
                <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}><Home size={20} /> Home</NavLink>
                <NavLink to="/fixtures" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}><Calendar size={20} /> Fixtures</NavLink>
                <NavLink to="/standings" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}><Trophy size={20} /> Standings</NavLink>
                <NavLink to="/players" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}><Users size={20} /> Players</NavLink>
            </div>
            <button className="theme-toggle" onClick={toggleDarkMode}>
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
        </nav>
    );
};

export default Navbar;
