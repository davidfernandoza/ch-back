'use strict'
const { morphism } = require('morphism')
const moment = require('moment')
const { Op } = require('sequelize')
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class TrmRepository extends Repository {
	constructor({ DB, TrmDto, Config }) {
		super(DB, TrmDto, Config, 'trm')
	}
	// Aqui van las consultas especializadas
	async last(transaction) {
		const dto = await this.entityDto.repository()
		const now = moment().toISOString()
		const before = moment().subtract(5, 'm').toISOString()
		const entity = await this.db[this.entity].findOne({
			where: {
				created_at: {
					[Op.between]: [before, now]
				}
			},
			order: [['id', 'DESC']],
			limit: 1,
			transaction: transaction
		})
		if (!entity) return null
		return morphism(dto, entity)
	}
}
module.exports = TrmRepository
