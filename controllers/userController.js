const db = require("../models/index");

module.exports = {
  // Find User, sort them by date, send them back to the user
  find: function(req, res) {
    db.Users.find({ firebaseId: req.params.id }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  },

  // get user id from firebase

  //   create new user
  create: function(req, res) {
    db.Users.create(req.body).then(dbResult => {
      res.json(dbResult);
    });
  },

  // Delete the specified Users
  delete: function(req, res) {
    db.Users.remove({ _id: req.params.id }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  },
  // Update the specified Users
  update: function(req, res) {
    db.Users.findOneAndUpdate(
      { firebaseId: req.params.id },
      { $set: { services: req.body } },
      { new: true }
    ).then(function(dbUsers) {
      res.json(dbUsers);
    });
  }
};
