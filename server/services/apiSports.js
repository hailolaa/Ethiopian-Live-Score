const axios = require('axios');

const APISPORTS_URL = 'https://v3.football.api-sports.io';
const API_KEY = process.env.APISPORTS_KEY;
const LEAGUE_ID = process.env.ETHIOPIA_LEAGUE_ID;
const SEASON = 2024;

const apiClient = axios.create({
    baseURL: APISPORTS_URL,
    headers: {
        'x-apisports-key': API_KEY,
        'x-apisports-host': 'v3.football.api-sports.io'
    }
});

const getStandings = async () => {
    const response = await apiClient.get('/standings', {
        params: { league: LEAGUE_ID, season: SEASON }
    });
    const standings = response.data.response[0]?.league.standings[0] || [];
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
};

const getFixtures = async () => {
    const response = await apiClient.get('/fixtures', {
        params: { league: LEAGUE_ID, season: SEASON }
    });
    return response.data.response.map(item => ({
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
};

const getTeams = async () => {
    const response = await apiClient.get('/teams', {
        params: { league: LEAGUE_ID, season: SEASON }
    });
    return response.data.response.map(item => ({
        id: item.team.id,
        name: item.team.name,
        logo: item.team.logo,
        city: item.venue.city,
        stadium: item.venue.name,
        coach: 'N/A' // API-Sports teams endpoint doesn't always include coach here
    }));
};

const getPlayers = async (teamId) => {
    const response = await apiClient.get('/players', {
        params: { team: teamId, season: SEASON }
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
};


const getLiveScores = async () => {
    const response = await apiClient.get('/fixtures', {
        params: { league: LEAGUE_ID, live: 'all' }
    });
    return response.data.response;
};

module.exports = {
    getStandings,
    getFixtures,
    getTeams,
    getPlayers,
    getLiveScores
};
