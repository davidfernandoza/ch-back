'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('plans', {
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
				},
				onDelete: 'cascade'
			},
			title: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			consignment_value: {
				type: Sequelize.DOUBLE,
				allowNull: false
			},
			sponsor_value: {
				type: Sequelize.DOUBLE,
				allowNull: false,
				defaultValue: 0
			},
			generation_1_value: {
				type: Sequelize.DOUBLE,
				allowNull: false
			},
			generation_2_value: {
				type: Sequelize.DOUBLE,
				allowNull: false
			},
			generation_3_value: {
				type: Sequelize.DOUBLE,
				allowNull: false
			},
			generation_4_value: {
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
		return queryInterface.dropTable('plans')
	}
}
