// has many polls

module.exports = function (sequelize, DataTypes) {
	var Events = sequelize.define("Events", {
		// Giving the Events model a name of type STRING
		event_code: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				len: [1, 5]
			}
		},
		event_desc: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
				len: [1]
			}
		},'createdAt': {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
    },
    'updatedAt': {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)'),
    },
  }, {
    timestamps: true
	});

	// Commenting out foreign key relationship for now
	Events.associate = function (models) {
		// Associating events with polls
		// When an Events is deleted, also delete any associated polls
		Events.hasMany(models.Polls, {
			onDelete: "cascade"
		});
		Events.hasMany(models.Feedback, {
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
