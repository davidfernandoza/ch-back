'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('pending_payments', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true
			},
			bonus_id: {
				type: Sequelize.INTEGER,
				references: {
					model: 'bonus',
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
			consignments_id: {
				type: Sequelize.INTEGER,
				references: {
					model: 'consignments',
					key: 'id'
				},
				onDelete: 'cascade'
			},
			payments_id: {
				type: Sequelize.INTEGER,
				references: {
					model: 'payments',
					key: 'id'
				}
			},
			plans_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'plans',
					key: 'id'
				}
			},
			value: {
				type: Sequelize.DOUBLE,
				allowNull: false
			},
			// Cobro
			payment_date: {
				type: Sequelize.DATE
			},
			state: {
				type: Sequelize.ENUM('activo', 'cancelado', 'espera', 'pagado'),
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
		return queryInterface.dropTable('pending_payments')
	}
}
