'use strict'
module.exports = (sequelize, DataTypes) => {
	const clients = sequelize.define(
		'clients',
		{
			id: {
				primaryKey: true,
				type: DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
				isNumeric: true
			},
			countries_id: {
				type: DataTypes.INTEGER,
				isNumeric: true
			},
			plans_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				isNumeric: true
			},
			sponsor_id: {
				type: DataTypes.INTEGER,
				isNumeric: true,
				defaultValue: null
			},
			trees_id: {
				type: DataTypes.INTEGER,
				isNumeric: true,
				defaultValue: null
			},
			telegram_id: {
				type: DataTypes.INTEGER,
				isNumeric: true,
				unique: true
			},
			state: {
				type: DataTypes.ENUM,
				values: ['activo', 'mora', 'inactivo', 'plataforma'],
				allowNull: false
			},
			full_name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			username: {
				type: DataTypes.STRING,
				allowNull: false
			},
			phone: {
				type: DataTypes.STRING
			}
		},
		{
			timestamps: true,
			tableName: 'clients',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)

	clients.associate = function (models) {
		/*
		 * Un cliente le pertenece a un pais (1:1)
		 */
		models.clients.belongsTo(models.countries, {
			foreignKey: 'countries_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'countries'
		})

		// Un cliente le pertenece a una suscripcion de un plan (1:1)
		models.clients.belongsTo(models.plans, {
			foreignKey: 'plans_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'plans'
		})

		// Un cliente le pertenece a un arbol (1:1)
		models.clients.belongsTo(models.trees, {
			foreignKey: 'trees_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'trees'
		})

		// Un cliente le pertenece a un patrocinador (1:1)
		models.clients.belongsTo(models.clients, {
			foreignKey: 'sponsor_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'clients_1'
		})

		// Un patrocinador tiene muchos clientes (1:M)
		models.clients.hasMany(models.clients, {
			foreignKey: 'sponsor_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'clients_2'
		})

		// Un cliente tienen muchos pagos pendientes (1:M)
		models.clients.hasMany(models.pending_payments, {
			foreignKey: 'clients_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'pending_payments'
		})

		// Un cliente tiene muchas direcciones (1:M)
		models.clients.belongsToMany(models.address, {
			through: models.address_clients, // Tabla pivote
			foreignKey: 'clients_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'address'
		})
	}
	return clients
}
