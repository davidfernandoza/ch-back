'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('consignments', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
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
			status: {
				type: Sequelize.ENUM('completo', 'incompleto', 'exedido', 'pendiente'),
				allowNull: false
			},
			expected_value: {
				type: Sequelize.DOUBLE,
				allowNull: false
			},
			received_value: {
				type: Sequelize.DOUBLE
			},
			hash: {
				type: Sequelize.STRING,
				unique: true
			},
			time: {
				type: Sequelize.INTEGER
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
		return queryInterface.dropTable('consignments')
	}
}
