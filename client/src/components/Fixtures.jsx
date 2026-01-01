import { useState, useEffect } from 'react';
import { Clock, MapPin } from 'lucide-react';
import './Fixtures.css';

const Fixtures = ({ season = 2025 }) => {
    const [fixtures, setFixtures] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`/api/fixtures?season=${season}`)
            .then(res => res.json())
            .then(data => {
                // Sort by date, latest first
                const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setFixtures(sorted);
                setLoading(false);
            })
            .catch(err => console.error('Error fetching fixtures:', err));
    }, [season]);


    if (loading) return <div className="loading">Loading Fixtures...</div>;

    return (
        <div className="fixtures-container">
            <h3>Fixtures & Results</h3>
            <div className="fixtures-list">
                {fixtures.map(match => (
                    <div key={match.id} className={`match-card ${match.status}`}>
                        <div className="match-header">
                            <span className={`status-badge ${match.status}`}>
                                {match.status === 'live' ? 'LIVE' : match.status.toUpperCase()}
                            </span>
                            {match.minute && <span className="match-minute">{match.minute}'</span>}
                        </div>
                        <div className="match-teams">
                            <div className="team">
                                <img src={match.homeLogo} alt={match.homeTeam} className="team-logo-small" />
                                <span className="team-name">{match.homeTeam}</span>
                            </div>
                            <div className="score">
                                {match.status === 'scheduled' ? (
                                    <span className="match-time">{new Date(match.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                ) : (
                                    <span className="current-score">{match.score.home} - {match.score.away}</span>
                                )}
                            </div>
                            <div className="team">
                                <img src={match.awayLogo} alt={match.awayTeam} className="team-logo-small" />
                                <span className="team-name">{match.awayTeam}</span>
                            </div>
                        </div>
                        <div className="match-footer">
                            <span><Clock size={14} /> {new Date(match.date).toLocaleDateString()}</span>
                            <span><MapPin size={14} /> {match.stadium}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Fixtures;
