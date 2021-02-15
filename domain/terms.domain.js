'use strict'
const { join } = require('path')
const { morphism } = require('morphism')
const Domain = require(join(__dirname, './domain'))

class UsersDomain extends Domain {
	constructor({ TermsRepository, TermsDto }) {
		super(TermsRepository, TermsDto)
		this.termsRepository = TermsRepository
	}

	async getType(type) {
		const dto = await this.entityDto.domain()
		const term = await this.termsRepository.getType(type)
		if (!term) return null
		return morphism(dto, term)
	}
}

module.exports = UsersDomain
