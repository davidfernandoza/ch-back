'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('address_clients', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true
			},
			address_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'address',
					key: 'id'
				}
			},
			clients_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'clients',
					key: 'id'
				},
				onDelete: 'cascade'
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false
			}
		})
	},
	down: queryInterface => {
		return queryInterface.dropTable('address_clients')
	}
}
