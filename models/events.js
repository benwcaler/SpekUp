

// has many has many polls

module.exports = function (sequelize, DataTypes) {
  var Events = sequelize.define("Events", {
    // Giving the Events model a name of type STRING
    name: DataTypes.STRING
  });

  Events.associate = function (models) {
    // Associating events with polls
    // When an Events is deleted, also delete any associated polls
    Events.hasMany(models.Polls, {
      onDelete: "cascade"
    });
    Events.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });

  };
  return Events;

};

// add belongs to user


