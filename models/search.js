'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const searchSchema = new Schema ({
  location: { type: String, require: true },
  date: { type: String, require: true }
  // add weather array required
  //add events arf req'd

  //
});
const searchModel = mongoose.model('Search', searchSchema);
// module.exports = profileModel;
module.exports = searchSchema;
