'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('payments', {
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
			trm_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'trm',
					key: 'id'
				}
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
		return queryInterface.dropTable('payments')
	}
}
