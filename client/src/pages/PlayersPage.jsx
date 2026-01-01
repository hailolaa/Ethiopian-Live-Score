import { useState, useEffect } from 'react';
import PlayerProfile from '../components/PlayerProfile';

const PlayersPage = () => {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/players?team=4110')
            .then(res => res.json())
            .then(data => {
                setPlayers(data);
                setLoading(false);
            })
            .catch(err => console.error('Error fetching players:', err));
    }, []);

    if (loading) return <div>Loading Players...</div>;

    return (
        <div className="page-container">
            <h2>EPL Stars</h2>
            <div className="players-grid">
                {players.map(player => (
                    <PlayerProfile key={player.id} playerId={player.id} />
                ))}
            </div>
        </div>
    );
};

export default PlayersPage;
