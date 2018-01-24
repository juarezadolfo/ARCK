
var db = require("../models")

module.exports = function(app) {
    app.get("/api/all", function(req, res)
{
    db.Team.findAll({}).then(function(dbTeam)
    {
        res.json(dbTeam);
    });
});

    app.

}





