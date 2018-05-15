// has many events

module.exports = function (sequelize, DataTypes) {
	var User = sequelize.define("User", {
		// Giving the User model a name of type STRING
		user_name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
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

	User.associate = function (models) {
		// Associating User with Events
		// When an User is deleted, also delete any associated Posts
		User.hasMany(models.Events, {
			onDelete: "cascade"
		});
	};

	return User;
};
