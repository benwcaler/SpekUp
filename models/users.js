// has many events

module.exports = function (sequelize, DataTypes) {
	var User = sequelize.define("User", {
		// Giving the User model a name of type STRING
		user_name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: true
		}, 
		sessionID: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
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
