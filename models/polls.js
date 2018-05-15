// has many polls_data

module.exports = function (sequelize, DataTypes) {
	var Polls = sequelize.define("Polls", {
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
	Polls.associate = function (models) {
		// Associating Polls with Polls Data
		// When an Poll is deleted, also delete any associated data
		Polls.hasMany(models.Poll_Data, {
			onDelete: "cascade"
		});
		Polls.belongsTo(models.Events, {
			foreignKey: {
				allowNull: false
			}
		});
	};

	return Polls;
};

//   add belongs to events