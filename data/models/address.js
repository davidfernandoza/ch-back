'use strict'
module.exports = (sequelize, DataTypes) => {
	const address = sequelize.define(
		'address',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true
			},
			address: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true
			},
			type: {
				type: DataTypes.ENUM,
				values: ['consignacion', 'pago'],
				allowNull: false
			},
			status: {
				type: DataTypes.ENUM,
				values: ['activa', 'inactiva'],
				allowNull: false
			}
		},
		{
			timestamps: true,
			tableName: 'address',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)
	address.associate = function (models) {
		/*
		 * Una direccion le puede pertenecer a muchos clientes (1:M)
		 */
		models.address.belongsToMany(models.clients, {
			through: models.address_clients, // Tabla pivote
			foreignKey: 'address_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'clients',
			constraints: false // desabilitar la referencia a varias tablas
		})

		// Una direccion generan muchas consignaciones (1:M)
		models.address.hasMany(models.consignments, {
			foreignKey: 'address_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'consignments'
		})

		// Una direccion recibe muchos pagos (1:M)
		models.address.hasMany(models.payments, {
			foreignKey: 'address_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'payments'
		})
	}
	return address
}
