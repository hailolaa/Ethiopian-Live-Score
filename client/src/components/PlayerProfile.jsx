import { useState, useEffect } from 'react';
import { User, Trophy, Star } from 'lucide-react';
import './Profile.css';

const PlayerProfile = ({ playerId }) => {
    const [player, setPlayer] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!playerId) return;
        fetch(`/api/players/${playerId}`)
            .then(res => res.json())
            .then(data => {
                setPlayer(data);
                setLoading(false);
            })
            .catch(err => console.error('Error fetching player:', err));
    }, [playerId]);

    if (loading) return <div>Loading Player...</div>;
    if (!player) return <div>Player not found</div>;

    return (
        <div className="profile-card">
            <div className="profile-header">
                <div className="profile-logo-placeholder"><User size={32} /></div>
                <div className="profile-info">
                    <h2>{player.name}</h2>
                    <p className="position-info"><Star size={16} /> {player.position}</p>
                </div>
            </div>
            <div className="profile-stats">
                <div className="stat-item">
                    <Trophy size={18} />
                    <span>Goals: {player.goals}</span>
                </div>
                <div className="stat-item">
                    <Star size={18} />
                    <span>Assists: {player.assists}</span>
                </div>
            </div>
        </div>
    );
};

export default PlayerProfile;
