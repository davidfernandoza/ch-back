'use strict'
module.exports = (sequelize, DataTypes) => {
	const consignments = sequelize.define(
		'consignments',
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
				isNumeric: true
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
			status: {
				type: DataTypes.ENUM,
				values: ['completo', 'incompleto', 'exedido', 'pendiente'],
				allowNull: false
			},
			expected_value: {
				type: DataTypes.DOUBLE,
				allowNull: false,
				isNumeric: true
			},
			received_value: {
				type: DataTypes.DOUBLE,
				isNumeric: true
			},
			hash: {
				type: DataTypes.STRING,
				unique: true
			},
			time: {
				type: DataTypes.INTEGER,
				isNumeric: true
			}
		},
		{
			timestamps: true,
			tableName: 'consignments',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)
	consignments.associate = function (models) {
		/*
		 * Una consignacion le pertenece a una direccion de billetera (1:1)
		 */
		models.consignments.belongsTo(models.address, {
			foreignKey: 'address_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'address'
		})

		// Una consignacion obtiene una trm para operar (1:1)
		models.consignments.belongsTo(models.trm, {
			foreignKey: 'trm_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'trm'
		})

		// Una consignacion generan muchos pagos pendientes (1:M)
		models.consignments.hasMany(models.pending_payments, {
			foreignKey: 'consignments_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'pending_payments'
		})

		// Una consignacion puede pagar muchas quincenas (1:M)
		models.consignments.belongsToMany(models.fortnights, {
			through: models.consignments_fortnights, // Tabla pivote
			foreignKey: 'consignments_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'fortnights'
		})
	}
	return consignments
}
