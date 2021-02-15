'use strict'
/*
 * Modelo de la tabla countries
 */
module.exports = (sequelize, DataTypes) => {
	const countries = sequelize.define(
		'countries',
		{
			id: {
				primaryKey: true,
				type: DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
				isNumeric: true
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true
			},
			prefix: {
				type: DataTypes.INTEGER,
				allowNull: false,
				unique: true,
				isNumeric: true
			}
		},
		{
			timestamps: true,
			tableName: 'countries',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)

	countries.associate = function (models) {
		/*
		 * En un pais habitan muchos clientes (1:M)
		 */
		models.countries.hasMany(models.clients, {
			foreignKey: 'countries_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'countries'
		})
	}

	return countries
}
