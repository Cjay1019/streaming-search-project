const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true
  },
  firebaseId: {
    type: String,
    required: true,
    unique: true
  },
  services: [
    {
      type: String,
      required: true,
      unique: true
    }
  ],
  favorites: [
    {
      type: String,
      required: false
    }
  ]
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
