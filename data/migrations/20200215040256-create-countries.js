'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('countries', {
			id: {
				primaryKey: true,
				type: Sequelize.INTEGER,
				autoIncrement: true,
				allowNull: false
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			prefix: {
				type: Sequelize.INTEGER,
				allowNull: false,
				unique: true
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
		return queryInterface.dropTable('countries')
	}
}
