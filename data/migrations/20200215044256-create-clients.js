'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('clients', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			countries_id: {
				type: Sequelize.INTEGER,
				defaultValue: null,
				references: {
					model: 'countries',
					key: 'id'
				}
			},
			plans_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				isNumeric: true,
				references: {
					model: 'plans',
					key: 'id'
				}
			},
			sponsor_id: {
				type: Sequelize.INTEGER,
				defaultValue: null,
				references: {
					model: 'clients',
					key: 'id'
				},
				onDelete: 'cascade'
			},
			trees_id: {
				type: Sequelize.INTEGER,
				defaultValue: null,
				references: {
					model: 'trees',
					key: 'id'
				},
				onDelete: 'cascade'
			},
			telegram_id: {
				type: Sequelize.INTEGER,
				unique: true
			},
			full_name: {
				type: Sequelize.STRING,
				allowNull: false
			},
			username: {
				type: Sequelize.STRING,
				allowNull: false
			},
			phone: {
				type: Sequelize.STRING
			},
			state: {
				type: Sequelize.ENUM('activo', 'mora', 'plataforma', 'inactivo'),
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
		return queryInterface.dropTable('clients')
	}
}
