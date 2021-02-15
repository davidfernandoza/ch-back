'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class PlansRepository extends Repository {
	constructor({ DB, PlansDto, Config }) {
		super(DB, PlansDto, Config, 'plans')
	}
	// Aqui van las consultas especializadas
}
module.exports = PlansRepository
