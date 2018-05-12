// feedback is assocated with parent polls
// module.exports = function(sequelize, DataTypes) {

// do We need to define anything else in feedback table?
// var Feedback = sequelize.define("feedback", {
//   feedback_type: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     validate: {
//       len: [1]
//     }
//   },
//   feedback_text: {
//     type: DataTypes.TEXT,
//     allowNull: false,
//     len: [1]
//   },


// });

//   Feedback.associate = function(models) {
//     // We're saying that Feedback should belong to an Poll
//     // Feedback can't be created without an Poll due to the foreign key constraint
//     Feedback.belongsTo(models.Polls, {
//       foreignKey: {
//         allowNull: false
//       }
//     });
//   };

//   return Feedback;
// };
// doesn't have "hasMany"
module.exports = function (sequelize, DataTypes) {
  var Feedback = sequelize.define("feedback", {
    // Giving the poll_data model a name of type STRING
    name: DataTypes.STRING

  }, {

    // this is the "options" object from the sequelize documentation
    classMethods: {
      associate: function (models) {
        // We're saying that Feedback should belong to an Poll
        // Feedback can't be created without an Poll due to the foreign key constraint
        Poll_Data.belongsTo(models.Events, {
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });
  return Poll_Data;
};

// add belongs to events