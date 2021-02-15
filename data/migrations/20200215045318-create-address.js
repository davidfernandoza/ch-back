'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('address', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true
			},
			address: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			type: {
				type: Sequelize.ENUM('consignacion', 'pago'),
				allowNull: false
			},
			status: {
				type: Sequelize.ENUM('activa', 'inactiva'),
				allowNull: false
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
		return queryInterface.dropTable('address')
	}
}
