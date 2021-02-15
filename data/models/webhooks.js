'use strict'
module.exports = (sequelize, DataTypes) => {
	const token_black_list = sequelize.define(
		'webhooks',
		{
			id: {
				allowNull: false,
				primaryKey: true,
				type: DataTypes.STRING
			},
			address: {
				type: DataTypes.STRING,
				unique: true
			},
			clients_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				isNumeric: true,
				unique: true
			}
		},
		{
			timestamps: true,
			tableName: 'webhooks',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)

	return token_black_list
}
