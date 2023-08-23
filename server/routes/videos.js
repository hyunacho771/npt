//routes/videos.js
const express = require("express");
const router = express.Router();
const Videos = require("../models/Videos");

// @route GET api/videos
// @desc Get all videos
// @access Public
router.get("/", async (req, res) => {
  try {
    const videos = await Videos.find();
    res.json(videos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route POST api/videos
// @desc Add new video
// @access Public
router.post("/", async (req, res) => {
  try {
    const { title, description, url } = req.body;
    const newVideo = new Videos({
      title,
      description,
      url,
    });
    const video = await newVideo.save();
    res.json(video);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route PUT api/videos/:id
// @desc Update video
// @access Public
router.put("/:id", async (req, res) => {
  try {
    const { title, description, url } = req.body;
    const videoFields = {};
    if (title) videoFields.title = title;
    if (description) videoFields.description = description;
    if (url) videoFields.url = url;
    let video = await Videos.findById(req.params.id);
    if (!video) return res.status(404).json({ msg: "Video not found" });
    video = await Videos.findByIdAndUpdate(
      req.params.id,
      { $set: videoFields },
      { new: true }
    );
    res.json(video);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route DELETE api/videos/:id
// @desc Delete video
// @access Public
router.delete("/:id", async (req, res) => {
  try {
    let video = await Videos.findById(req.params.id);
    if (!video) return res.status(404).json({ msg: "Video not found" });
    await Videos.findByIdAndRemove(req.params.id);
    res.json({ msg: "Video removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
