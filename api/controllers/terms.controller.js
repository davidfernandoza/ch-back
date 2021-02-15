'use strict'
const { join } = require('path')
const { morphism } = require('morphism')
const Controller = require(join(__dirname, './controller'))

class TermsController extends Controller {
	constructor({ TermsRepository, TermsDto }) {
		super(TermsRepository, TermsDto)
	}

	async getType(req, res) {
		const dto = await this.entityDto.api()
		const { type } = req.params
		let entity = await this.entityDomain.getType(type)
		if (!entity) return res.status(404).send({ payload: [] })
		entity = morphism(dto, entity)
		return res.status(200).send({ payload: entity })
	}
}

module.exports = TermsController
