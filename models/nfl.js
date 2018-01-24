module.exports = function (sequelize, DataTypes) {
    var NFLTeam = sequelize.define("NFLTeam", {
        // Giving the Team model a name of type STRING
        teamName: {
            type: DataTypes.STRING
        },
        photo: {
            type: DataTypes.TEXT
        },
        record: {
            type: DataTypes.STRING
        },
        headCoach: {
            type: DataTypes.STRING
        },
        teamOwner: {
            type: DataTypes.STRING
        },
        stadium: {
            type: DataTypes.STRING
        },
        teamLink: {
            type: DataTypes.TEXT
        },
        ticketLink: {
            type: DataTypes.TEXT
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
