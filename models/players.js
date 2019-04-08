const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  ID: Number,
  Name: String,
  Age: Number,
  Photo: String,
  Nationality: String
});

module.exports = mongoose.model("stats", playerSchema);
