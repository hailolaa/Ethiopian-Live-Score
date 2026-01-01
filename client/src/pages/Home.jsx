import { useState } from 'react'
import Standings from '../components/Standings'
import Fixtures from '../components/Fixtures'

const Home = () => {
    const [season, setSeason] = useState(2025);

    return (
        <div className="home-dashboard">
            <div className="dashboard-controls">
                <div className="season-selector">
                    <label>Season: </label>
                    <select value={season} onChange={(e) => setSeason(parseInt(e.target.value))}>
                        <option value={2025}>2025/26 (Current)</option>
                        <option value={2024}>2024/25</option>
                    </select>
                </div>
            </div>

            <div className="dashboard-grid">
                <div className="fixtures-panel">
                    <h2>Recent Fixtures</h2>
                    <Fixtures season={season} />
                </div>
                <div className="stats-panel">
                    <h2>League Table</h2>
                    <Standings season={season} />
                </div>
            </div>
        </div>
    );
};


export default Home;
