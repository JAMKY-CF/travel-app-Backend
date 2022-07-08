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
/////////    Profile CRUD   /////////
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



//GET USER BY EMAIL
app.get('/users/:email', getUserByEmail);

async function getUserByEmail(request, response, next) {
  try {
    console.log('Testing function fire');
    let email = request.params.email;
    let results = await Profile.findOne({ email: email });
    response.status(200).send(results);
  } catch (error) {
    next(error);
  }
}

//PUT USER (UPDATE USER DATA)
app.put('/users/:email', updateAndReplaceUser);

async function updateAndReplaceUser(request,response){
  let email=request.params.email;
  let newUserData=request.body;
  try {
    let query= { email: email };
    let updatedUser= await Profile.findOneAndReplace(query , newUserData, {new:true, overwrite:true});
    response.status(200).send(updatedUser);
  } catch (error) {
    response.status(500).send(error.message);
  }
}

// async function putUser(request,response){
//   let id=request.params.id
//   try {
//     let newBookData=request.body;
//     let updatedBook= await Profile.findByIdAndUpdate(id , newBookData, {new:true, overwrite:true});
//     response.status(200).send(updatedBook);
//   } catch (error) {
//     response.status(500).send(error.message);
//   }
// }

//POST USER (CREATE NEW USERS)
app.post('/users', postUser);

async function postUser(request, response, next) {
  console.log(request.body);
  try {
    let createdUser = await Profile.create(request.body);
    response.status(201).send(createdUser);
  } catch (error) {
    next (error);
  }
}

//DELETE PROFILE (MUST HAVE PATH PARAMETER USING ':<VARIABLE>')
app.delete('/users/:email', deleteUser);

async function deleteUser(request, response, next) {
  console.log('deleting a user...')
  let email = request.params.email;
  try {
    await Profile.deleteOne({ email: email });
    response.status(202).send('User deleted');
  } catch(error) {
    next(error);
  } 
  console.log(email);
}

////////////   SEARCH CRUD    //////////

//GET SEARCH BY Location
// app.get('/users/:email', getUserByEmail);

// async function getUserByEmail(request, response, next) {
//   try {
//     console.log('Testing function fire');
//     let email = request.params.email;
//     let results = await Profile.findOne({ email: email });
//     response.status(200).send(results);
//   } catch (error) {
//     next(error);
//   }
// }

//PUT USER (UPDATE USER DATA)
// app.put('/users/:email', updateAndReplaceUser);

// async function updateAndReplaceUser(request,response){
//   let email=request.params.email;
//   let newUserData=request.body;
//   try {
//     let query= { email: email };
//     let updatedUser= await Profile.findOneAndReplace(query , newUserData, {new:true, overwrite:true});
//     response.status(200).send(updatedUser);
//   } catch (error) {
//     response.status(500).send(error.message);
//   }
// }


////PUT FUNCTION FROM CAN OF BOOKS
// async function putUser(request,response){
//   let id=request.params.id
//   try {
//     let newBookData=request.body;
//     let updatedBook= await Profile.findByIdAndUpdate(id , newBookData, {new:true, overwrite:true});
//     response.status(200).send(updatedBook);
//   } catch (error) {
//     response.status(500).send(error.message);
//   }
// }

// GET SEARCHES
app.get('/search', getSearches);

async function getSearches(request, response, next) {
  let results = await Search.find();
  response.status(200).send(results);
}

//POST SEARCH (CREATE NEW SEARCH OBJECTS FOR SEARCH HISTORY)
app.post('/search', postSearch);

async function postSearch(request, response, next) {
  console.log(request.body);
  try {
    let createdSearch = await Search.create(request.body);
    response.status(201).send(createdSearch);
  } catch (error) {
    next (error);
  }
}

//DELETE PROFILE (MUST HAVE PATH PARAMETER USING ':<VARIABLE>')
app.delete('/search/:id', deleteSearch);

async function deleteSearch(request, response, next) {
  console.log('deleting a search...')
  let id = request.params.id;
  try {
    await Search.findByIdAndDelete({ id: id });
    response.status(202).send('Search deleted');
  } catch(error) {
    next(error);
  } 
  console.log(email);
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


