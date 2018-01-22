module.exports = function(sequelize, DataTypes) {
    var Team = sequelize.define("Team", {
      // Giving the Team model a name of type STRING
      teamName: {
          type: DataTypes.STRING
      },
      teamScore: {
          type: DataTypes.INTEGER
      },
      userScore: {
          type: DataTypes.INTEGER
      }
    });
    return Team;
  };
  