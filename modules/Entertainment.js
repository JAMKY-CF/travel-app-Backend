'use strict';

const axios = require('axios');

async function getEvent (request, response, next){

  try{
    let cityName = request.query.searchQuery;

    let url = `https://app.ticketmaster.com/discovery/v2/attractions?apikey=${process.env.TM_API}&keyword=${cityName}`;
    let eventInfo = await axios.get(url);

    let eventData = eventInfo.data._embedded.attractions.map(event => new Attraction(event));

    response.send(eventData);
  }
  catch(error){
    handleError(error, response);
    next(error);
  }
}


class Attraction {
  constructor(event) {
    this.img = event.images.url;
    this.name = event.name;
    this.url = event.url;
  }
}

const handleError = (error, response) => {
  response.status(500).send('Something went wrong.');
};

module.exports = getEvent;
