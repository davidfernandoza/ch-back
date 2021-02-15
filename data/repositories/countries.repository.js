'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class CountriesRepository extends Repository {
	constructor({ DB, CountriesDto, Config }) {
		super(DB, CountriesDto, Config, 'countries')
	}
	// Aqui van las consultas especializadas
}
module.exports = CountriesRepository
