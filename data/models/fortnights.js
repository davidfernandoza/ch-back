'use strict'
module.exports = (sequelize, DataTypes) => {
	const fortnights = sequelize.define(
		'fortnights',
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
				isNumeric: true
			},
			number: {
				type: DataTypes.INTEGER,
				allowNull: false,
				unique: true,
				isNumeric: true
			},
			start_date: {
				type: DataTypes.DATE,
				allowNull: false
			},
			cut_date: {
				type: DataTypes.DATE,
				allowNull: false
			}
		},
		{
			timestamps: true,
			tableName: 'fortnights',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)
	fortnights.associate = function (models) {
		/*
		 * Una quincena espera muchas consignaciones (1:M)
		 */
		models.fortnights.belongsToMany(models.consignments, {
			through: models.consignments_fortnights, // Tabla pivote
			foreignKey: 'fortnights_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'consignments'
		})
	}
	return fortnights
}
