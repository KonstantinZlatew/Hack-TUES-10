const axios = require('axios');
async function fetchPlants(query) {
    const apiKey = require('./API_token')
    const apiUrl = `https://trefle.io/api/v1/plants/${query}?&token=${apiKey}`;
    
    try {
        const response = await axios.get(apiUrl);
        const plants = response.data.data; // Extract plant data from the response
        return plants;
    } catch (error) {
        console.error('Error fetching plant data:', error);
        throw error;
    }
}

// Example usage
fetchPlants(265324).then(plants => {
    console.log('Plants:', plants.id);
}).catch(error => {
    console.error('Error:', error);
});
