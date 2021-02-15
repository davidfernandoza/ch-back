'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class FortnightsRepository extends Repository {
	constructor({ DB, FortnightsDto, Config }) {
		super(DB, FortnightsDto, Config, 'fortnights')
	}
	// Aqui van las consultas especializadas
}
module.exports = FortnightsRepository
