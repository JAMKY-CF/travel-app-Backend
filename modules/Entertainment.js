'use strict';

const axios = require('axios');

async function getEvent (request, response, next){

  try{
    let cityName = request.query.cityName;
    // let url = `${process.env.HARD_CODED_TM_API_URL}`
    let url = `${process.env.TM_API}${process.env.TM_API_KEY}&StartDateTime=2022-07-08T07:00:00Z&size=5&sort=date,asc&city=${cityName}`;

    let eventInfo = await axios.get(url);
    console.log(eventInfo);
    let eventData = eventInfo.data._embedded.events.map(event => new Attraction(event));


    response.send(eventData);
  }
  catch(error){
    handleError(error, response);
    next(error);
  }
}


class Attraction {
  constructor(event) {
    this.img_url = event.images[0].url;
    this.name = event.name;
    this.url = event.url;
    this.dateTime = event.dates.start.dateTime;
  }
}

const handleError = (error, response) => {
  response.status(500).send('Something went wrong.');
};

module.exports = getEvent;
