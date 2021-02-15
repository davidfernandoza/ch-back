'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class BonusRepository extends Repository {
	constructor({ DB, BonusDto, Config }) {
		super(DB, BonusDto, Config, 'bonus')
	}
	// Aqui van las consultas especializadas
}
module.exports = BonusRepository
