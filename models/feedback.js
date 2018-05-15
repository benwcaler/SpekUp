// doesn't have "hasMany"
module.exports = function (sequelize, DataTypes) {

	var Feedback = sequelize.define("Feedback", {
		// Giving the Feedback model a name of type STRING
		feedback_type: {
			type: DataTypes.STRING,
			allowNull: false
		},
		feedback_text: {
			type: DataTypes.TEXT,
			allowNull: false,
			len: [1]
		}
		// ,'createdAt': {
		//   type: DataTypes.DATE(3),
		//   defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
		// },
		// 'updatedAt': {
		//   type: DataTypes.DATE(3),
		//   defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)'),
		// },
	}, {
			timestamps: true
		});

	// this is the "options" object from the sequelize documentation
	// Commenting out foreign key relationship for now
	Feedback.associate = function (models) {
		// We're saying that Feedback should belong to an Poll
		// Feedback can't be created without an Poll due to the foreign key constraint
		Feedback.belongsTo(models.Events, {
			foreignKey: {
				allowNull: false
			}
		});
	};
	return Feedback;

};

// add belongs to events