import { useState, useEffect } from 'react';
import { MapPin, User, Trophy } from 'lucide-react';
import './Profile.css';

const TeamProfile = ({ teamId }) => {
    const [team, setTeam] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!teamId) return;
        fetch(`/api/teams/${teamId}`)
            .then(res => res.json())
            .then(data => {
                setTeam(data);
                setLoading(false);
            })
            .catch(err => console.error('Error fetching team:', err));
    }, [teamId]);

    if (loading) return <div>Loading Profile...</div>;
    if (!team) return <div>Team not found</div>;

    return (
        <div className="profile-card">
            <div className="profile-header">
                <div className="profile-logo-placeholder">{team.name[0]}</div>
                <div className="profile-info">
                    <h2>{team.name}</h2>
                    <p className="city-stadium"><MapPin size={16} /> {team.city}, {team.stadium}</p>
                </div>
            </div>
            <div className="profile-stats">
                <div className="stat-item">
                    <User size={18} />
                    <span>Coach: {team.coach}</span>
                </div>
            </div>
        </div>
    );
};

export default TeamProfile;
