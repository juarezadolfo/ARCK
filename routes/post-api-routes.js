// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // GET route for getting all of the posts
    app.get("/api/posts", function(req, res) {
      var query = {};
      if (req.query.team_id) {
        query.TeamId = req.query.team_id;
      }
      db.Post.findAll({}).then(function(dbPost) {
        res.json(dbPost);
      });
    });
  
  
    // POST route for saving a new post
    app.post("/api/posts", function(req, res) {
      db.Team.create(req.body).then(function(dbTeam) {
        res.json(dbTeam);
      });
    });
  
  };
  