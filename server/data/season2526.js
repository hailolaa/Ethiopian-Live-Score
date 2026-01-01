const teams2526 = [
    { id: 3155, name: 'Sidama Coffee', logo: 'https://media.api-sports.io/football/teams/3155.png', city: 'Yirgalem', stadium: 'Hawassa Stadium' },
    { id: 4110, name: 'Ethiopian Coffee', logo: 'https://media.api-sports.io/football/teams/4110.png', city: 'Addis Ababa', stadium: 'Addis Ababa Stadium' },
    { id: 4111, name: 'Saint George SC', logo: 'https://media.api-sports.io/football/teams/4111.png', city: 'Addis Ababa', stadium: 'Addis Ababa Stadium' },
    { id: 3156, name: 'Bahir Dar City', logo: 'https://media.api-sports.io/football/teams/3156.png', city: 'Bahir Dar', stadium: 'Bahir Dar Stadium' },
    { id: 3157, name: 'Fasil Kenema', logo: 'https://media.api-sports.io/football/teams/3157.png', city: 'Gondar', stadium: 'Fasilades Stadium' },
    { id: 3158, name: 'Defence Force', logo: 'https://media.api-sports.io/football/teams/3158.png', city: 'Addis Ababa', stadium: 'Addis Ababa Stadium' },
    { id: 3159, name: 'Hawassa City', logo: 'https://media.api-sports.io/football/teams/3159.png', city: 'Hawassa', stadium: 'Hawassa Stadium' },
    { id: 3160, name: 'Dire Dawa City', logo: 'https://media.api-sports.io/football/teams/3160.png', city: 'Dire Dawa', stadium: 'Dire Dawa Stadium' },
    { id: 3161, name: 'Adama City', logo: 'https://media.api-sports.io/football/teams/3161.png', city: 'Adama', stadium: 'Abebe Bikila Stadium' },
    { id: 3162, name: 'Hadiya Hossana', logo: 'https://media.api-sports.io/football/teams/3162.png', city: 'Hossana', stadium: 'Abiy Hersamo Stadium' }
];

const standings2526 = [
    { teamId: 3155, teamName: 'Sidama Coffee', logo: 'https://media.api-sports.io/football/teams/3155.png', played: 12, won: 8, drawn: 2, lost: 2, goalsFor: 21, goalsAgainst: 10, points: 26, rank: 1 },
    { teamId: 3157, teamName: 'Fasil Kenema', logo: 'https://media.api-sports.io/football/teams/3157.png', played: 12, won: 7, drawn: 3, lost: 2, goalsFor: 18, goalsAgainst: 11, points: 24, rank: 2 },
    { teamId: 3158, teamName: 'Defence Force', logo: 'https://media.api-sports.io/football/teams/3158.png', played: 12, won: 7, drawn: 2, lost: 3, goalsFor: 19, goalsAgainst: 12, points: 23, rank: 3 },
    { teamId: 4111, teamName: 'Saint George SC', logo: 'https://media.api-sports.io/football/teams/4111.png', played: 12, won: 6, drawn: 4, lost: 2, goalsFor: 17, goalsAgainst: 9, points: 22, rank: 4 },
    { teamId: 4110, teamName: 'Ethiopian Coffee', logo: 'https://media.api-sports.io/football/teams/4110.png', played: 12, won: 5, drawn: 3, lost: 4, goalsFor: 15, goalsAgainst: 13, points: 18, rank: 5 }
];

const fixtures2526 = [
    { id: 1001, date: '2026-01-05T15:00:00Z', stadium: 'Addis Ababa Stadium', status: 'scheduled', homeTeam: 'Saint George SC', awayTeam: 'Ethiopian Coffee', homeLogo: 'https://media.api-sports.io/football/teams/4111.png', awayLogo: 'https://media.api-sports.io/football/teams/4110.png', score: { home: null, away: null } },
    { id: 1002, date: '2026-01-06T13:00:00Z', stadium: 'Hawassa Stadium', status: 'scheduled', homeTeam: 'Sidama Coffee', awayTeam: 'Hawassa City', homeLogo: 'https://media.api-sports.io/football/teams/3155.png', awayLogo: 'https://media.api-sports.io/football/teams/3159.png', score: { home: null, away: null } },
    { id: 1003, date: '2026-01-07T14:30:00Z', stadium: 'Fasilades Stadium', status: 'scheduled', homeTeam: 'Fasil Kenema', awayTeam: 'Defence Force', homeLogo: 'https://media.api-sports.io/football/teams/3157.png', awayLogo: 'https://media.api-sports.io/football/teams/3158.png', score: { home: null, away: null } }
];

module.exports = {
    teams2526,
    standings2526,
    fixtures2526
};
