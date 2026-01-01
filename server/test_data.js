require('dotenv').config();
const apiSports = require('./services/apiSports');

const testApi = async () => {
    try {
        console.log('--- MAPPED STANDINGS ---');
        const standings = await apiSports.getStandings();
        console.log(JSON.stringify(standings.slice(0, 1), null, 2));

        console.log('\n--- MAPPED FIXTURES ---');
        const fixtures = await apiSports.getFixtures();
        console.log(JSON.stringify(fixtures.slice(0, 1), null, 2));
    } catch (error) {
        if (error.response) {
            console.error('Error Status:', error.response.status);
            console.error('Error Data:', JSON.stringify(error.response.data, null, 2));
        } else {
            console.error('Error:', error.message);
        }
    }
};

testApi();
