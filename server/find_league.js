const axios = require('axios');
require('dotenv').config();

const findLeague = async () => {
    try {
        const response = await axios.get('https://v3.football.api-sports.io/leagues', {
            headers: {
                'x-apisports-key': process.env.APISPORTS_KEY
            },
            params: {
                country: 'Ethiopia'
            }
        });

        const league = response.data.response.find(l => l.league.id === 363);
        if (league) {
            league.seasons.slice(-5).forEach(s => {
                console.log(`Year: ${s.year}, Current: ${s.current}`);
            });
        } else {
            console.log('League 363 not found');
        }
    } catch (error) {
        console.error('Error fetching leagues:', error.message);
    }
};

findLeague();
