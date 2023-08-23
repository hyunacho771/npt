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

VideosSchema.statics.getVideos = function () {
  return new Promise((resolve, reject) => {
    this.find({}, (error, videos) => {
      if (error) {
        reject(error);
      } else {
        resolve(videos);
      }
    });
  });
};

VideosSchema.statics.getVideoById = function (id) {
  try {
    const video = this.findById(id);
    return video;
  } catch (error) {
    throw error;
  }
};

VideosSchema.statics.createVideo = function (title, description, url) {
  return new Promise((resolve, reject) => {
    const video = new this({ title, description, url });
    video.save((error, video) => {
      if (error) {
        reject(error);
      } else {
        resolve(video);
      }
    });
  });
};

module.exports = Videos = mongoose.model("videos", VideosSchema);
