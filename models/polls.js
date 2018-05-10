
// has zero or 1 feedback

module.exports = function(sequelize, DataTypes) {
    var Polls = sequelize.define("polls", {
      // Giving the Polls model a name of type STRING
      name: DataTypes.STRING
    });
  
    Polls.associate = function(models) {
      // Associating Polls with Feedback
      // When an User is deleted, also delete any associated Posts
      Polls.hasMany(models.Feeback, {
        onDelete: "cascade"
      });
      Polls.belongsTo (models.Events, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Polls;

    
  };

//   add belongs to events