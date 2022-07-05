'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;
const searchSchema = new Schema ({
  location: { type: String, require: true },
  date: { type: String, require: true }
});

module.exports = searchSchema;