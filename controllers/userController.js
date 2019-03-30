import db from "../models/index";

module.exports = {
  // Find all Userss, sort them by date, send them back to the user
  findAll: function(req, res) {
    db.Users.find(req.query)
      .sort({ date: -1 })
      .then(function(dbUsers) {
        res.json(dbUsers);
      });
  },

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
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    ).then(function(dbUsers) {
      res.json(dbUsers);
    });
  }
};
