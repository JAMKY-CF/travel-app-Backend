'use strict';

const axios = require('axios');

async function getWeather(request, response, next) {

  try {
    let cityName = request.query.cityName;
    let cityurl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_ctyxplr_API_KEY}&q=${cityName}&format=json`;
    let resultingObj = {};
    resultingObj = await axios.get(cityurl);
    resultingObj = resultingObj.data[0];
    let lat = resultingObj.lat;
    let lon = resultingObj.lon;
    console.log('Resulting Object: ',resultingObj);
    let url = `http://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_API}&lang=en&units=I&days=5&lat=${lat}&lon=${lon}`;
    let weatherInfo = await axios.get(url);

    let weatherData = weatherInfo.data.data.map(skies => new Weather(skies));

    response.send(weatherData);
  }
  catch (error) {
    handleError(error, response);
    next(error);
  }
}


class Weather {
  constructor(skies) {
    this.date = skies.datetime;
    this.description = skies.weather.description;
  }
}

const handleError = (error, response) => {
  response.status(500).send('Something went wrong.');
};

module.exports = getWeather;
