'use strict'
const { join } = require('path')
const { Op } = require('sequelize')
const { morphism } = require('morphism')
const Repository = require(join(__dirname, './repository'))

class TermsRepository extends Repository {
	constructor({ DB, TermsDto, Config }) {
		super(DB, TermsDto, Config, 'terms')
	}

	async getType(type) {
		try {
			const dto = await this.entityDto.repository()
			const lastCreatedAt = await this.db.terms.max('created_at')
			if (!lastCreatedAt) return null
			const terms = this.db.terms.findOne({
				where: { [Op.and]: [{ type }, { lastCreatedAt }] }
			})
			return morphism(dto, terms)
		} catch (error) {
			super.errorHandle(error)
		}
	}
}
module.exports = TermsRepository
