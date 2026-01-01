const axios = require('axios');

const APISPORTS_URL = 'https://v3.football.api-sports.io';
const API_KEY = process.env.APISPORTS_KEY;
const LEAGUE_ID = process.env.ETHIOPIA_LEAGUE_ID;
const SEASON = 2025;

const apiClient = axios.create({
    baseURL: APISPORTS_URL,
    headers: {
        'x-apisports-key': API_KEY,
        'x-apisports-host': 'v3.football.api-sports.io'
    }
});

const { teams2526, standings2526, fixtures2526 } = require('../data/season2526');

const getStandings = async (season = SEASON) => {
    try {
        const response = await apiClient.get('/standings', {
            params: { league: LEAGUE_ID, season: season }
        });

        const hasErrors = response.data.errors && Object.keys(response.data.errors).length > 0;
        const standings = response.data.response?.[0]?.league.standings[0] || [];

        if (hasErrors || standings.length === 0) {
            return standings2526; // Always return 25/26 mock as fallback for now
        }

        return standings.map(item => ({
            teamId: item.team.id,
            teamName: item.team.name,
            logo: item.team.logo,
            played: item.all.played,
            won: item.all.win,
            drawn: item.all.draw,
            lost: item.all.lose,
            goalsFor: item.all.goals.for,
            goalsAgainst: item.all.goals.against,
            points: item.points,
            rank: item.rank
        }));
    } catch (e) {
        console.error('Standings Fetch Error:', e.message);
        return standings2526;
    }
};

const getFixtures = async (season = SEASON) => {
    try {
        const response = await apiClient.get('/fixtures', {
            params: { league: LEAGUE_ID, season: season }
        });

        const hasErrors = response.data.errors && Object.keys(response.data.errors).length > 0;
        const fixtures = response.data.response || [];

        if (hasErrors || fixtures.length === 0) {
            return fixtures2526;
        }

        return fixtures.map(item => ({
            id: item.fixture.id,
            date: item.fixture.date,
            stadium: item.fixture.venue.name || 'Unknown Stadium',
            status: item.fixture.status.short === 'FT' ? 'finished' : (item.fixture.status.short === 'NS' ? 'scheduled' : 'live'),
            homeTeam: item.teams.home.name,
            awayTeam: item.teams.away.name,
            homeLogo: item.teams.home.logo,
            awayLogo: item.teams.away.logo,
            score: {
                home: item.goals.home,
                away: item.goals.away
            },
            minute: item.fixture.status.elapsed
        }));
    } catch (e) {
        console.error('Fixtures Fetch Error:', e.message);
        return fixtures2526;
    }
};

const getTeams = async (season = SEASON) => {
    try {
        const response = await apiClient.get('/teams', {
            params: { league: LEAGUE_ID, season: season }
        });

        const hasErrors = response.data.errors && Object.keys(response.data.errors).length > 0;
        const teams = response.data.response || [];

        if (hasErrors || teams.length === 0) {
            return teams2526;
        }

        return teams.map(item => ({
            id: item.team.id,
            name: item.team.name,
            logo: item.team.logo,
            city: item.venue.city,
            stadium: item.venue.name,
            coach: 'N/A'
        }));
    } catch (e) {
        console.error('Teams Fetch Error:', e.message);
        return teams2526;
    }
};

const getPlayers = async (teamId) => {
    try {
        const response = await apiClient.get('/players', {
            params: { team: teamId, season: 2024 }
        });
        return response.data.response.map(item => ({
            id: item.player.id,
            name: item.player.name,
            photo: item.player.photo,
            position: item.statistics[0]?.games.position || 'Unknown',
            teamName: item.statistics[0]?.team.name,
            goals: item.statistics[0]?.goals.total || 0,
            assists: item.statistics[0]?.goals.assists || 0
        }));
    } catch (e) {
        return [];
    }
};

const getLiveScores = async () => {
    try {
        const response = await apiClient.get('/fixtures', {
            params: { league: LEAGUE_ID, live: 'all' }
        });
        return response.data.response || [];
    } catch (e) {
        return [];
    }
};

module.exports = {
    getStandings,
    getFixtures,
    getTeams,
    getPlayers,
    getLiveScores
};
