// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var athleteSchema = new Schema({
  name: String,
  overallrank: Number,
  overallscore: String,
  regionid: String,
  region: String,
  affiliateid: String,
  affiliate: String,
  age: Number,
  height: String,
  weight: String,
  division: Number,
  scores: Array
});

// the schema is useless so far
// we need to create a model using it
var athlete = mongoose.model('athletes', athleteSchema);

// make this available to our users in our Node applications
module.exports = athlete;