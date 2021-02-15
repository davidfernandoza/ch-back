'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('trees', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			// Hijo izquierdo
			left_id: {
				type: Sequelize.INTEGER,
				isNumeric: true,
				defaultValue: null,
				references: {
					model: 'trees',
					key: 'id'
				}
			},
			// Hijo central
			center_id: {
				type: Sequelize.INTEGER,
				isNumeric: true,
				defaultValue: null,
				references: {
					model: 'trees',
					key: 'id'
				}
			},
			// Hijo Derecho
			rigth_id: {
				type: Sequelize.INTEGER,
				isNumeric: true,
				defaultValue: null,
				references: {
					model: 'trees',
					key: 'id'
				}
			},
			// Padre
			generation_1_id: {
				type: Sequelize.INTEGER,
				isNumeric: true,
				defaultValue: null,
				references: {
					model: 'trees',
					key: 'id'
				}
			},
			// Abuelo
			generation_2_id: {
				type: Sequelize.INTEGER,
				isNumeric: true,
				defaultValue: null,
				references: {
					model: 'trees',
					key: 'id'
				}
			},
			// Bisabuelo
			generation_3_id: {
				type: Sequelize.INTEGER,
				isNumeric: true,
				defaultValue: null,
				references: {
					model: 'trees',
					key: 'id'
				}
			},
			// Tatarabuelo
			generation_4_id: {
				type: Sequelize.INTEGER,
				isNumeric: true,
				defaultValue: null,
				references: {
					model: 'trees',
					key: 'id'
				}
			},
			search_level: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			level: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			position: {
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
		return queryInterface.dropTable('trees')
	}
}
