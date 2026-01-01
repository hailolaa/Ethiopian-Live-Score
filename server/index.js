const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { teams, standings, players, fixtures } = require('./data/mockData');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.json({ message: 'Ethiopian Premier League API is running' });
});

// Mock routes
app.get('/api/standings', (req, res) => res.json(standings));
app.get('/api/teams', (req, res) => res.json(teams));
app.get('/api/fixtures', (req, res) => res.json(fixtures));
app.get('/api/players', (req, res) => res.json(players));

// Team by ID
app.get('/api/teams/:id', (req, res) => {
    const team = teams.find(t => t.id === parseInt(req.params.id));
    if (!team) return res.status(404).json({ message: 'Team not found' });
    res.json(team);
});

// Player by ID
app.get('/api/players/:id', (req, res) => {
    const player = players.find(p => p.id === parseInt(req.params.id));
    if (!player) return res.status(404).json({ message: 'Player not found' });
    res.json(player);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
