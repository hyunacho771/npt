//usersControllers.js
const Users = require("../models/Users");

module.exports = {
  // @route GET api/users
  // @desc Get all users
  // @access Public
  getUsers: async (req, res) => {
    try {
      const users = await Users.find();
      res.json(users);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  },
};
