'use strict'
module.exports = (sequelize, DataTypes) => {
	const payments = sequelize.define(
		'payments',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true
			},
			address_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				isNumeric: true
			},
			trm_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				isNumeric: true
			},
			value: {
				type: DataTypes.DOUBLE,
				allowNull: false
			}
		},
		{
			timestamps: true,
			tableName: 'payments',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)
	payments.associate = function (models) {
		/*
		 * Un pago se deposita en una direccion (1:1)
		 */
		models.payments.belongsTo(models.address, {
			foreignKey: 'address_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'address'
		})

		// Un pago obtiene una trm para operar (1:1)
		models.payments.belongsTo(models.trm, {
			foreignKey: 'trm_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'trm'
		})

		// Un pago se genera por muchos pagos pendientes (1:M)
		models.payments.hasMany(models.pending_payments, {
			foreignKey: 'payments_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'pending_payments'
		})
	}
	return payments
}
