import { useState, useEffect } from 'react';
import { Clock, MapPin } from 'lucide-react';
import './Fixtures.css';

const Fixtures = () => {
    const [fixtures, setFixtures] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/fixtures')
            .then(res => res.json())
            .then(data => {
                setFixtures(data);
                setLoading(false);
            })
            .catch(err => console.error('Error fetching fixtures:', err));
    }, []);

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
                                <span className="team-name">{match.homeTeamId === 1 ? 'Saint George SC' : match.homeTeamId === 3 ? 'Fasil Kenema' : 'Team ' + match.homeTeamId}</span>
                            </div>
                            <div className="score">
                                {match.status === 'scheduled' ? (
                                    <span className="match-time">{new Date(match.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                ) : (
                                    <span className="current-score">{match.score.home} - {match.score.away}</span>
                                )}
                            </div>
                            <div className="team">
                                <span className="team-name">{match.awayTeamId === 2 ? 'Eth. Coffee' : match.awayTeamId === 4 ? 'Bahir Dar City' : 'Team ' + match.awayTeamId}</span>
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
