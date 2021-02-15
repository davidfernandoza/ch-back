'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('webhooks', {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.STRING
			},
			address: {
				type: Sequelize.STRING
			},
			clients_id: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE
			}
		})
	},
	down: queryInterface => {
		return queryInterface.dropTable('webhooks')
	}
}
