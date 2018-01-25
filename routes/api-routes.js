var db = require("../models");
var nflScore = require("../data/surveyScore")

module.exports = function (app) {

    app.get("/", function (req, res) {
        // var query = {};
        // var nflScore = {};
        // for (var i=0; i<nflScore.length; i++) {
        //     if (req.query.team_id===nflScore[i]) {
        //         query.TeamId = req.query.team_id;
        //     }
            db.NFLTeam.findAll({}).then(function (dbNFLTeam) {
                res.json(dbNFLTeam);
            });
        // }
      
    });


    app.get("/nfl/:id", function(req, res) {
        // Find one Author with the id in req.params.id and return them to the user with res.json
       db.NFLTeam.findOne({
         where: {
            id: req.params.id
         }
       }).then(function(dbNFLTeam) {
        // if the survey score is the id number call the findOne with that id number?
        
        res.json(dbNFLTeam);
       });
     });
   


    // POST route for saving a new post
    app.post("/post", function (req, res) {
        db.Team.create(req.body).then(function (dbTeam) {
            res.json(dbTeam);
        });
    });

};

