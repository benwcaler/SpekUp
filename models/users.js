
// has many events

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("user", {
      // Giving the User model a name of type STRING
      name: DataTypes.STRING
    });
  
    User.associate = function(models) {
      // Associating User with Events
      // When an User is deleted, also delete any associated Posts
      User.hasMany(models.Events, {
        onDelete: "cascade"
      });
    };
  
    return User;
  };
  