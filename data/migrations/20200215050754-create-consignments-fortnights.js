'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('consignments_fortnights', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true
			},
			consignments_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'consignments',
					key: 'id'
				},
				onDelete: 'cascade'
			},
			fortnights_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'fortnights',
					key: 'id'
				}
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
		return queryInterface.dropTable('consignments_fortnights')
	}
}
