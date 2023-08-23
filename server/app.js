//index.js

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const router = express.Router();
const bodyParser = require("body-parser");
require("dotenv").config();

const Users = require("./models/Users");

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const videos = require("./routes/videos");

app.use("/videos", videos);

app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  Users.createUser(name, email, password)
    .then((user) => {
      res.status(201).send({ user });
    })
    .catch((error) => {
      console.log(error);
    });
});
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  Users.getUserByEmail(email)
    .then((user) => {
      if (!user) {
        res.status(404).send({ message: "User not found" });
      } else {
        Users.comparePassword(password)
          .then((isMatch) => {
            if (!isMatch) {
              res.status(400).send({ message: "Invalid credentials" });
            } else {
              res.status(200).send({ message: "Login successful" });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
