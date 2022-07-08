'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(`${process.env.DB_URL}/Travel_App_301.JAMKY`);

const Profile = require('./models/profile.js');

async function seed() {
  await Profile.create({
    name: 'A',
    email: 'B', 
    image: '#',
    phone: 'C',
    age: '23',
  });
  
  console.log('Test was added');

  // await Profile.create({
  //   title: 'Harry Potter',
  //   description: 'Prisoner of Azkaban',
  //   status: 'Finished',
  // });

  // console.log('HP was added');

  // await Profile.create({
  //   title: 'SQL for Dummies',
  //   description: 'Your first aid kit for using SQL for the internet and intranets',
  //   status: 'Have not started',
  // });

  // console.log('SQL for Dummies was added');

  
  mongoose.disconnect();
}
seed()