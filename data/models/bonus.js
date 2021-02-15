'use strict'
module.exports = (sequelize, DataTypes) => {
	const bonus = sequelize.define(
		'bonus',
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
			value: {
				type: DataTypes.DOUBLE,
				allowNull: false,
				isNumeric: true
			}
		},
		{
			timestamps: true,
			tableName: 'bonus',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)
	bonus.associate = function (models) {
		/*
		 * Un bono se registra en muchos pagos pendientes (1:M)
		 */
		models.bonus.hasMany(models.pending_payments, {
			foreignKey: 'bonus_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'pending_payments'
		})

		// Un bono tiene un termino (1:1)
		models.bonus.belongsTo(models.terms, {
			foreignKey: 'terms_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'terms'
		})
	}
	return bonus
}
