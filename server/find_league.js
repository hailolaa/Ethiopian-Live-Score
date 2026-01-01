const axios = require('axios');
require('dotenv').config();

const findLeague = async () => {
    try {
        const teamsResponse = await axios.get('https://v3.football.api-sports.io/teams', {
            headers: { 'x-apisports-key': process.env.APISPORTS_KEY },
            params: { league: 363, season: 2025 }
        });

        console.log(`Results for League 363, Season 2025 Teams: ${teamsResponse.data.results}`);
        if (teamsResponse.data.results > 0) {
            teamsResponse.data.response.forEach(t => console.log(t.team.name));
        } else {
            console.log('No teams found for league 363 in 2025.');
        }

        const response = await axios.get('https://v3.football.api-sports.io/fixtures', {
            headers: { 'x-apisports-key': process.env.APISPORTS_KEY },
            params: { league: 363, season: 2024 }
        });

        const fixtures = response.data.response;
        fixtures.sort((a, b) => new Date(b.fixture.date) - new Date(a.fixture.date));
        console.log('Last 10 matches of 2024:');
        fixtures.slice(0, 10).forEach(f => {
            console.log(`${f.fixture.date}: ${f.teams.home.name} vs ${f.teams.away.name}`);
        });

    } catch (error) {
        console.error('Error:', error.message);
    }
};

findLeague();
