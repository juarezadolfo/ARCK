module.exports = function(sequelize, DataTypes) {
    var Team = sequelize.define("Team", {
      // Giving the Team model a name of type STRING
      name: DataTypes.STRING
    });
    return Team;
  };
  