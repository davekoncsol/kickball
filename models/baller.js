var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    text: String
  }, {
    timestamps: true
  });

var ballerSchema = new mongoose.Schema({
    name: String,
    email: String,
    team: String,
    avatar: String,
    comments: [commentSchema],
    googleId: String
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Baller', ballerSchema);