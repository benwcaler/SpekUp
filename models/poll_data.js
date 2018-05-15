// doesn't have "hasMany"
module.exports = function (sequelize, DataTypes) {

	var Poll_Data = sequelize.define("Poll_Data", {
		// Giving the poll_data model a name of type STRING
		poll_option: {
			type: DataTypes.STRING,
			allowNull: false
		},
		option_count: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
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

	// this is the "options" object from the sequelize documentation
	Poll_Data.associate = function (models) {
		// We're saying that Feedback should belong to an Poll
		// Feedback can't be created without an Poll due to the foreign key constraint
		Poll_Data.belongsTo(models.Polls, {
			foreignKey: {
				allowNull: true
			}
		});
	};
	return Poll_Data;
};

