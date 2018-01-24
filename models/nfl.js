module.exports = function (sequelize, DataTypes) {
    var Team = sequelize.define("Team", {
        // Giving the Team model a name of type STRING
        teamName: {
            type: DataTypes.STRING
        },
        photo: {
            type: DataTypes.TEXT
        },
        questionOne: {
            type: DataTypes.INTEGER
        },
        questionTwo: {
            type: DataTypes.INTEGER
        },
        questionThree: {
            type: DataTypes.INTEGER
        },
        questionFour: {
            type: DataTypes.INTEGER
        },
        questionFive: {
            type: DataTypes.INTEGER
        },
        questionSix: {
            type: DataTypes.INTEGER
        },
        questionSeven: {
            type: DataTypes.INTEGER
        },
        questionEight: {
            type: DataTypes.INTEGER
        },
        questionNine: {
            type: DataTypes.INTEGER
        },
        questionTende: {
            type: DataTypes.INTEGER
        },
        createdAt: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatedAt: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    });
    return Team;
};
