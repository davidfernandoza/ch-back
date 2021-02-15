'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))
const { Op } = require('sequelize')

class TreesRepository extends Repository {
	constructor({ DB, TreesDto, Config }) {
		super(DB, TreesDto, Config, 'trees')
	}

	// // Buscar por otro atributo
	// async getAttribute(attribute_id, attribute) {
	// 	return this.db[this.entity].findOne({
	// 		where: { [attribute]: attribute_id }
	// 	})
	// }

	// // Buscar por un array de atributos
	// async getAttributeArray(Opr, attributesArray) {
	// 	return this.db[this.entity].findOne({
	// 		where: { [Opr]: attributesArray }
	// 	})
	// }

	// // Conteo de nodos que hay en un rango de un sub-arbol
	// async countNodes(limits) {
	// 	return await this.db[this.entity].count({
	// 		where: { position: { [Op.between]: [limits.left, limits.rigth] } }
	// 	})
	// }

	// async getLevelNodes(limits) {
	// 	return await this.db[this.entity].findAll({
	// 		attributes: ['position'],
	// 		where: {
	// 			position: {
	// 				// [Op.between]: [40, 50]
	// 				[Op.between]: [limits.left, limits.rigth]
	// 			}
	// 		}
	// 	})
	// }
}
module.exports = TreesRepository
