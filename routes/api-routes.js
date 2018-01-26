var db = require("../models");
var path = require('path');
// Import the list of friend entries
var teams = require('../data/teams.js');

module.exports = function (app) {

    app.get("/all", function (req, res) {
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
   

    //  app.get("/api/teams", function(req, res){
    //     res.json(teamsArray);
    // });


    // POST route for saving a new post
    app.post("/post", function (req, res) {
        db.Team.create(req.body).then(function (dbTeam) {
            res.json(dbTeam);
        });
    });


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

app.get('/api/teams', function(req, res) {   //http://expressjs.com/en/guide/routing.html
    res.json(teams);
});
// Add new friend entry
app.post('/api/teams', function(req, res) {  //http://expressjs.com/en/guide/routing.html
    // Capture the user input object
    var userInput = req.body;
    var userResponses = userInput.scores;

    // Compute best friend match
    var matchName = '';
    var matchImage = '';
    var totalDifference = 40000; // Make the initial value big for comparison
    var matchLink = '';
    // Examine all existing friends in the list
    for (var i = 0; i < teams.length; i++) {	
        // Compute differenes for each question, hence the new var variable for the For loop
        var diff = 0;
        for (var j = 0; j < userResponses.length; j++) {
            diff += Math.abs(teams[i].scores[j] - userResponses[j]);
        }
        // If lowest difference, record the friend match
        if (diff < totalDifference) {	
            totalDifference = diff;
            matchName = teams[i].name;
            matchImage = teams[i].photo;
            matchLink = teams[i].link;
        }
    }
    // Add new user
    teams.push(userInput);
    // Send response
    res.json({status: 'OK', matchName: matchName, matchImage: matchImage, matchLink: matchLink}); //https://www.npmjs.com/package/res-json
});


};

