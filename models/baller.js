var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    text: String,
    name: String,
    avatar: String,
    ballerId: String
  }, {
    timestamps: true
  });

var ballerSchema = new mongoose.Schema({
    name: String,
    email: String,
    team: {type: String, default: 'Please add team'},
    runs: String,
    funFacts: String,
    hometown: String,
    avatar: String,
    comments: [commentSchema],
    googleId: String,
    favDrink: String
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Baller', ballerSchema);