module.exports = function (sequelize, DataTypes) {
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
        },
<<<<<<< HEAD
        created_at: {
=======
        createdAt: {
>>>>>>> master
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
<<<<<<< HEAD
        updated_at: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
=======
        updatedAt: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
>>>>>>> master
    });

    return Team;
};
