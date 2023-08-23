//Users.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  name: String,
  email: String,
  password: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

UsersSchema.statics.createUser = async function (name, email, password) {
  try {
    const user = new this({ name, email, password });
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};

UsersSchema.statics.getUserByEmail = async function (email) {
  try {
    const user = await this.findOne({ email });
    return user;
  } catch (error) {
    throw error;
  }
};

UsersSchema.statics.comparePassword = async function (password) {
  try {
    const isMatch = await this.findOne({ password });
    return isMatch;
  } catch (error) {
    throw error;
  }
};

module.exports = Users = mongoose.model("users", UsersSchema);
