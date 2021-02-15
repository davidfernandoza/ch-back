'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('bonus', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true
			},
			terms_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'terms',
					key: 'id'
				}
			},
			title: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			value: {
				type: Sequelize.DOUBLE,
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
		return queryInterface.dropTable('bonus')
	}
}
