import { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';
import './LiveTicker.css';

const LiveTicker = () => {
    const [liveMatches, setLiveMatches] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLive = () => {
            fetch('/api/live')
                .then(res => res.json())
                .then(data => {
                    setLiveMatches(data);
                    setLoading(false);
                })
                .catch(err => console.error('Error fetching live matches:', err));
        };

        fetchLive();
        const interval = setInterval(fetchLive, 60000); // Update every minute
        return () => clearInterval(interval);
    }, []);

    if (loading || liveMatches.length === 0) return null;

    return (
        <div className="live-ticker">
            <div className="ticker-header">
                <Activity size={18} className="live-icon" />
                <span>LIVE NOW</span>
            </div>
            <div className="ticker-list">
                {liveMatches.map(match => (
                    <div key={match.id} className="ticker-item">
                        <span className="ticker-teams">{match.homeTeam} {match.score.home} - {match.score.away} {match.awayTeam}</span>
                        <span className="ticker-minute">{match.minute}'</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LiveTicker;
