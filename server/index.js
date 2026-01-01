const express = require('express');
const cors = require('cors');
require('dotenv').config();

const apiSports = require('./services/apiSports');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.json({ message: 'Ethiopian Premier League API (Live) is running' });
});

// Live Routes
app.get('/api/standings', async (req, res) => {
    try {
        const season = parseInt(req.query.season) || 2025;
        const standings = await apiSports.getStandings(season);
        res.json(standings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/teams', async (req, res) => {
    try {
        const season = parseInt(req.query.season) || 2025;
        const teams = await apiSports.getTeams(season);
        res.json(teams);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/players', async (req, res) => {
    try {
        const teamId = req.query.team || 4110; // Default to a team for now
        const players = await apiSports.getPlayers(teamId);
        res.json(players);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.get('/api/fixtures', async (req, res) => {
    try {
        const season = parseInt(req.query.season) || 2025;
        const fixtures = await apiSports.getFixtures(season);
        res.json(fixtures);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.get('/api/live', async (req, res) => {
    try {
        const live = await apiSports.getLiveScores();
        res.json(live);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
