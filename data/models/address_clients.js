'use strict'
module.exports = (sequelize, DataTypes) => {
	const address_clients = sequelize.define(
		'address_clients',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true
			},
			address_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				isNumeric: true
			},
			clients_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				isNumeric: true
			}
		},
		{
			timestamps: true,
			tableName: 'address_clients',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)
	address_clients.associate = function (models) {
		/*
		 * Un pivote le pertenece una diereccion (1:1)
		 */
		models.address_clients.belongsTo(models.address, {
			foreignKey: 'address_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'address'
		})

		// Un pivote le pertenece a un cliente (1:1)
		models.address_clients.belongsTo(models.clients, {
			foreignKey: 'clients_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'clients'
		})
	}
	return address_clients
}
