var db = require("../models");
var nflScore = require("../data/surveyScore")

module.exports = function (app) {

    app.get("/", function (req, res) {
