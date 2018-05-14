// has many polls_data

module.exports = function (sequelize, DataTypes) {
	var Polls = sequelize.define("polls", {
		// Giving the Polls model a name of type STRING
		poll_type: {
			type: DataTypes.STRING,
			allowNull: false
		},
		poll_question: {
			type: DataTypes.STRING,
			allowNull: false
		},
		active_inactive: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true
		}
	});
	// Polls.associate = function (models) {
	// 	// Associating Polls with Polls Data
	// 	// When an Poll is deleted, also delete any associated data
	// 	Polls.hasMany(models.Poll_Data, {
	// 		onDelete: "cascade"
	// 	});
	// 	Polls.belongsTo(models.Events, {
	// 		foreignKey: {
	// 			allowNull: false
	// 		}
	// 	});
	// };
	return Polls;
};

// Polls.associate = function(models) {
//   // Associating Polls with Feedback
//   // When an User is deleted, also delete any associated Posts
//   Polls.hasMany(models.Feeback, {
//     onDelete: "cascade"
//   });
//   Polls.belongsTo (models.Events, {
//     foreignKey: {
//       allowNull: false
//     }
//   });



//   add belongs to events