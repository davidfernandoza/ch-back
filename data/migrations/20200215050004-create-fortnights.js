'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('fortnights', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			number: {
				type: Sequelize.INTEGER,
				allowNull: false,
				unique: true
			},
			start_date: {
				type: Sequelize.DATE,
				allowNull: false
			},
			cut_date: {
				type: Sequelize.DATE,
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
		return queryInterface.dropTable('fortnights')
	}
}
