'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const profileSchema = new Schema ({
  name: {type: String, require: true },
  email: {type: String, require: true }, 
  image: {type: String, require: false },
  phone: {type: String, require: false },
  age: {type: String, require: false },
});

const profileModel = mongoose.model('Profile',profileSchema);

module.exports = profileModel;

