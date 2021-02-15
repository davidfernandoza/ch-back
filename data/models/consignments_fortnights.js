'use strict'
module.exports = (sequelize, DataTypes) => {
	const consignments_fortnights = sequelize.define(
		'consignments_fortnights',
		{
			id: {
				primaryKey: true,
				type: DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
				isNumeric: true
			},
			consignments_id: {
				type: DataTypes.INTEGER,
				isNumeric: true,
				allowNull: false
			},
			fortnights_id: {
				type: DataTypes.INTEGER,
				isNumeric: true,
				allowNull: false
			}
		},
		{
			timestamps: true,
			tableName: 'consignments_fortnights',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)
	consignments_fortnights.associate = function (models) {
		/*
		 * Un pivote le pertenece una consignacion (1:1)
		 */
		models.consignments_fortnights.belongsTo(models.consignments, {
			foreignKey: 'consignments_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'consignments'
		})

		// Un pivote le pertenece a una quincena (1:1)
		models.consignments_fortnights.belongsTo(models.fortnights, {
			foreignKey: 'fortnights_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'fortnights'
		})
	}
	return consignments_fortnights
}
