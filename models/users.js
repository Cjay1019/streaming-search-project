const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
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
      required: true
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
