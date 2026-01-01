import { useState, useEffect } from 'react';
import './Standings.css';

const Standings = () => {
    const [standings, setStandings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/standings')
            .then(res => res.json())
            .then(data => {
                setStandings(data);
                setLoading(false);
            })
            .catch(err => console.error('Error fetching standings:', err));
    }, []);

    if (loading) return <div className="loading">Loading Standings...</div>;

    return (
        <div className="standings-container">
            <h3>League Standings</h3>
            <table className="standings-table">
                <thead>
                    <tr>
                        <th>Pos</th>
                        <th>Team</th>
                        <th>P</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>GF</th>
                        <th>GA</th>
                        <th>GD</th>
                        <th>Pts</th>
                    </tr>
                </thead>
                <tbody>
                    {standings.map((item, index) => (
                        <tr key={item.teamId} className={index < 3 ? 'top-team' : ''}>
                            <td>{index + 1}</td>
                            <td className="team-name">{item.teamName}</td>
                            <td>{item.played}</td>
                            <td>{item.won}</td>
                            <td>{item.drawn}</td>
                            <td>{item.lost}</td>
                            <td>{item.goalsFor}</td>
                            <td>{item.goalsAgainst}</td>
                            <td>{item.goalsFor - item.goalsAgainst}</td>
                            <td className="points">{item.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Standings;
