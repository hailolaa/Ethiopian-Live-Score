import Standings from '../components/Standings'
import Fixtures from '../components/Fixtures'

const Home = () => {
    return (
        <div className="dashboard-grid">
            <div className="stats-panel">
                <Standings />
            </div>
            <div className="fixtures-panel">
                <Fixtures />
            </div>
        </div>
    );
};

export default Home;
