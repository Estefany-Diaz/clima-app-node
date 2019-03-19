const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`htta://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e2b868df7bc705ec3286c8f012046466&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}