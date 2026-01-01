const axios = require('axios');
const API_KEY = '6dd698fb184178eff93004d003fcd106';

const check = async () => {
    const s2024 = await axios.get('https://v3.football.api-sports.io/fixtures', {
        headers: { 'x-apisports-key': API_KEY },
        params: { league: 363, season: 2024 }
    });
    console.log('2024 API Results:', s2024.data);


    const s2025 = await axios.get('https://v3.football.api-sports.io/fixtures', {
        headers: { 'x-apisports-key': API_KEY },
        params: { league: 363, season: 2025 }
    });
    console.log('2025 API Results:', s2025.data.results);
};

check();
