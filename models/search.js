'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const searchSchema = new Schema ({
  location: { type: String, require: true },
  date: { type: String, require: true },
});

const searchModel = mongoose.model('Search', searchSchema);

module.exports = searchModel;
