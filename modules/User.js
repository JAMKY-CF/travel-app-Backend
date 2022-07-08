'use strict';

//REQUIRE
require('dotenv').config();
const express = require('express');
const cors = require('cors');

//bring in mongoose
const mongoose = require('mongoose');
//bring in a schema to interact with that model
const Profile = require('./models/Profiles.js');

// connect mongoose to our MongoDB
mongoose.connect(process.env.DB_URL);

//GET ALL USERS (RETRIEVE FROM SERVER)
app.get('/users', getUsers);

async function getUsers(request, response, next) {
  try {
    let results = await Profile.find();
    response.status(200).send(results);
  } catch (error) {
    next(error);
  }
}








//GET USER BY EMAIL
app.get('/users/email', getUserByEmail);

async function getUserByEmail(request, response, next) {
  try {
    // console.log('Testing function fire');
    let email = request.query.email;
    let results = await Profile.findOne({ email: email });
    response.status(200).send(results);
  } catch (error) {
    next(error);
  }
}









//POST USER (CREATE NEW USERS)
app.post('/users', postUser);

async function postUser(request, response, next) {
  // console.log(request.body);
  try {
    let createdUser = await Profile.create(request.body);
    response.status(201).send(createdUser);
  } catch (error) {
    next (error);
  }
}


//DELETE ROUTE (MUST HAVE PATH PARAMETER USING ':<VARIABLE>')
app.delete('/users/:id', deleteBooks);

async function deleteBooks(request, response, next) {
  // console.log('delete function fired')
  let id = request.params.id;
  try {
    await Profile.findByIdAndDelete(id);
    response.status(202).send('user deleted');
  } catch(error) {
    next(error);
  } 
  // console.log(id);
}









//DELETE ROUTE (MUST HAVE PATH PARAMETER USING ':<VARIABLE>')
app.delete('/users/:id', deleteUser);
