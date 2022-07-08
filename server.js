'use strict';

// Global Variables
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const Profile = require('./models/profile');
const Search = require('./models/search');
const getWeather = require('./modules/Weather');
const getEvent = require('./modules/Entertainment');
const verifyUser = require('./modules/auth');

// MongoDB connect
mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

// Invokes
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;
// Profile CRUD
app.get('/profile', getProfile);
app.get('/Weather', getWeather);
app.get('/Entertainment', getEvent);

// Profile CRUD Functions
async function getProfile(request, response, next) {
  // verify the user first before you allow them to make a request
  verifyUser(request, async (err, user) => {
    if (err) {
      console.error(err);
      response.send('invalid token');
    } else {
      let results = await Profile.find();
      response.status(200).send(results);
    } 
  });
}
// Tests

app.get('/', (request, response) => {
  response.status(200).send('It works');
});




app.get('*', (request, response) => {
  response.status(404).send('Bad request');
});

app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));


