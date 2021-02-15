'use strict'
module.exports = (sequelize, DataTypes) => {
	const trm = sequelize.define(
		'trm',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				isNumeric: true
			},
			value: {
				type: DataTypes.DOUBLE,
				allowNull: false,
				isNumeric: true
			}
		},
		{
			timestamps: true,
			tableName: 'trm',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)
	trm.associate = function (models) {
		/*
		 * Una trm se registra en muchos pagos (1:M)
		 */
		models.trm.hasMany(models.payments, {
			foreignKey: 'trm_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'payments'
		})

		// Una trm se registra en muchas consignaciones (1:M)
		models.trm.hasMany(models.consignments, {
			foreignKey: 'trm_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'consignments'
		})
	}
	return trm
}
