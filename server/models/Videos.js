//Videos.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideosSchema = new Schema({
  title: String,
  description: String,
  url: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Videos = mongoose.model("videos", VideosSchema);
