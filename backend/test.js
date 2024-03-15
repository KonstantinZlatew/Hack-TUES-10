const axios = require('axios');

const options = {
    method: 'GET',
    url: 'https://plantwise.p.rapidapi.com/plant_care/',
    params: {plant_type: 'rose'},
    headers: {
      'X-RapidAPI-Key': '6a27cbf03emshc1461230a75ebeep122a78jsn79a4f0062278',
      'X-RapidAPI-Host': 'plantwise.p.rapidapi.com'
    }
  };
  
  try {
      const response = axios.request(options);
      console.log(response.data);
  } catch (error) {
      console.error(error);
  }