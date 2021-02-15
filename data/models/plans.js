'use strict'
module.exports = (sequelize, DataTypes) => {
	const plans = sequelize.define(
		'plans',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				isNumeric: true
			},
			terms_id: {
				type: DataTypes.INTEGER,
				isNumeric: true,
				allowNull: false
			},
			title: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true
			},
			consignment_value: {
				type: DataTypes.DOUBLE,
				allowNull: false,
				isNumeric: true
			},
			sponsor_value: {
				type: DataTypes.DOUBLE,
				allowNull: false,
				defaultValue: 0
			},
			generation_1_value: {
				type: DataTypes.DOUBLE,
				allowNull: false,
				isNumeric: true
			},
			generation_2_value: {
				type: DataTypes.DOUBLE,
				allowNull: false,
				isNumeric: true
			},
			generation_3_value: {
				type: DataTypes.DOUBLE,
				allowNull: false,
				isNumeric: true
			},
			generation_4_value: {
				type: DataTypes.DOUBLE,
				allowNull: false,
				isNumeric: true
			}
		},
		{
			timestamps: true,
			tableName: 'plans',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)

	plans.associate = function (models) {
		/*
		 *  Un plan rige a muchos pagos pendientes (1:M)
		 */
		models.plans.hasMany(models.pending_payments, {
			foreignKey: 'plans_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'pending_payments'
		})

		// Un plan tiene muchos clientes suscritos (1:M)
		models.plans.hasMany(models.clients, {
			foreignKey: 'plans_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'clients'
		})

		// Un plan tiene un termino de uso (1:1)
		models.plans.belongsTo(models.terms, {
			foreignKey: 'terms_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'terms'
		})
	}
	return plans
}
