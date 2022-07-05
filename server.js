'use strict';

// Global Variables
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const Profile = require('./models/profile');
const Search = require('./models/search');

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

// Profile CRUD
app.get('/profile', getProfile);

// Profile CRUD Functions
async function getProfile(request, response, next){
  let results = await Profile.find();
  response.status(200).send(results);
}

// Tests
const PORT = process.env.PORT || 3002;

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


