'use strict'
module.exports = (sequelize, DataTypes) => {
	const pending_payments = sequelize.define(
		'pending_payments',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true
			},
			bonus_id: {
				type: DataTypes.INTEGER,
				isNumeric: true
			},
			clients_id: {
				type: DataTypes.INTEGER,
				isNumeric: true,
				allowNull: false
			},
			consignments_id: {
				type: DataTypes.INTEGER,
				isNumeric: true
			},
			payments_id: {
				type: DataTypes.INTEGER,
				isNumeric: true
			},
			plans_id: {
				type: DataTypes.INTEGER,
				isNumeric: true,
				allowNull: false
			},
			value: {
				type: DataTypes.DOUBLE,
				allowNull: false,
				isNumeric: true
			},
			// Cobro
			payment_date: {
				type: DataTypes.DATE
			},
			state: {
				type: DataTypes.ENUM,
				values: ['activo', 'cancelado', 'espera', 'pagado'],
				allowNull: false
			}
		},
		{
			timestamps: true,
			tableName: 'pending_payments',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)
	pending_payments.associate = function (models) {
		/*
		 * Un pago pendiente le pertenecen a un cliente (1:1)
		 */
		models.pending_payments.belongsTo(models.clients, {
			foreignKey: 'clients_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'clients'
		})

		// Una pago pendiente se rige a un plan (1:1)
		models.pending_payments.belongsTo(models.plans, {
			foreignKey: 'plans_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'plans'
		})

		// Un pago pendiente se genero por una consignación (1:1)
		models.pending_payments.belongsTo(models.consignments, {
			foreignKey: 'consignments_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'consignments'
		})

		// Un pagos pendientes hace parte de un pago (1:1)
		models.pending_payments.belongsTo(models.payments, {
			foreignKey: 'payments_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'payments'
		})

		// Un pago pendientes se le puede asignar un bono (1:1)
		models.pending_payments.belongsTo(models.bonus, {
			foreignKey: 'bonus_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'bonus'
		})
	}
	return pending_payments
}
