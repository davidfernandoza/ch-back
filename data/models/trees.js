'use strict'
module.exports = (sequelize, DataTypes) => {
	const trees = sequelize.define(
		'trees',
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER
			},
			// Hijo izquierdo
			left_id: {
				type: DataTypes.INTEGER,
				isNumeric: true,
				defaultValue: null
			},
			// Hijo central
			center_id: {
				type: DataTypes.INTEGER,
				isNumeric: true,
				defaultValue: null
			},
			// Hijo Derecho
			rigth_id: {
				type: DataTypes.INTEGER,
				isNumeric: true,
				defaultValue: null
			},
			// Padre
			generation_1_id: {
				type: DataTypes.INTEGER,
				isNumeric: true,
				defaultValue: null
			},
			// Abuelo
			generation_2_id: {
				type: DataTypes.INTEGER,
				isNumeric: true,
				defaultValue: null
			},
			// Bisabuelo
			generation_3_id: {
				type: DataTypes.INTEGER,
				isNumeric: true,
				defaultValue: null
			},
			// Tatarabuelo
			generation_4_id: {
				type: DataTypes.INTEGER,
				isNumeric: true,
				defaultValue: null
			},
			search_level: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			level: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			position: {
				type: DataTypes.INTEGER,
				allowNull: false,
				unique: true
			},
			created_at: {
				allowNull: false,
				type: DataTypes.DATE
			},
			updated_at: {
				allowNull: false,
				type: DataTypes.DATE
			}
		},
		{
			timestamps: true,
			tableName: 'trees',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)
	trees.associate = function (models) {
		/*
		 * Un arbol tiene un cliente (1:1)
		 */
		models.trees.hasOne(models.clients, {
			foreignKey: 'trees_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'clients'
		})

		// Un arbol hijo le pertenece a un arbol padre (1:1)
		models.trees.belongsTo(models.trees, {
			foreignKey: 'generation_1_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'trees_1'
		})

		// Un arbol padre tiene muchos arboles hijos (1:M)
		models.trees.hasMany(models.trees, {
			foreignKey: 'generation_1_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'trees_2'
		})

		// Un arbol nieto le pertenece a un arbol abuelo (1:1)
		models.trees.belongsTo(models.trees, {
			foreignKey: 'generation_2_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'trees_3'
		})

		// Un arbol abuelo tiene muchos arboles nietos (1:M)
		models.trees.hasMany(models.trees, {
			foreignKey: 'generation_2_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'trees_4'
		})

		// Un arbol bisnieto le pertenece a un arbol bisabuelo (1:1)
		models.trees.belongsTo(models.trees, {
			foreignKey: 'generation_3_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'trees_5'
		})

		// Un arbol bisabuelo tiene muchos arboles bisnietos (1:M)
		models.trees.hasMany(models.trees, {
			foreignKey: 'generation_3_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'trees_6'
		})

		// Un arbol tataranieto le pertenece a un arbol tatarabuelo (1:1)
		models.trees.belongsTo(models.trees, {
			foreignKey: 'generation_3_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'trees_7'
		})

		// Un arbol tatarabuelo tiene muchos arboles tataranietos (1:M)
		models.trees.hasMany(models.trees, {
			foreignKey: 'generation_3_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'trees_8'
		})

		// Un arbol padre tiene un hijo central (1:1)
		models.trees.hasOne(models.trees, {
			foreignKey: 'center_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'trees_9'
		})

		// Un hijo central le pertenece a un arbol padre (1:1)
		models.trees.belongsTo(models.trees, {
			foreignKey: 'center_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'trees_10'
		})

		// Un arbol padre tiene un hijo izquierdo (1:1)
		models.trees.hasOne(models.trees, {
			foreignKey: 'left_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'trees_11'
		})

		// Un hijo izquierdo le pertenece a un arbol padre (1:1)
		models.trees.belongsTo(models.trees, {
			foreignKey: 'left_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'trees_12'
		})

		// Un arbol padre tiene un hijo derecho (1:1)
		models.trees.hasOne(models.trees, {
			foreignKey: 'rigth_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'trees_13'
		})

		// Un hijo derecho le pertenece a un arbol padre (1:1)
		models.trees.belongsTo(models.trees, {
			foreignKey: 'rigth_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'trees_14'
		})
	}
	return trees
}
