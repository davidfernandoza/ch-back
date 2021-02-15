'use strict'
module.exports = (sequelize, DataTypes) => {
	const terms = sequelize.define(
		'terms',
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER
			},
			description: {
				allowNull: false,
				type: DataTypes.TEXT
			},
			type: {
				allowNull: false,
				type: DataTypes.ENUM,
				values: ['general', 'plan', 'bono']
			}
		},
		{
			timestamps: true,
			tableName: 'terms',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)
	terms.associate = function (models) {
		/*
		 * Un termino pertenece a muchos planes (1:M)
		 */
		models.terms.hasMany(models.plans, {
			foreignKey: 'terms_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'plans'
		})

		// Un termino pertenece a muchos bonos (1:M)
		models.terms.hasMany(models.bonus, {
			foreignKey: 'terms_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'bonus'
		})
	}
	return terms
}
