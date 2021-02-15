'use strict'
const { join } = require('path')
const Domain = require(join(__dirname, './domain'))

class CountriesDomain extends Domain {
	constructor({ CountriesRepository, CountriesDto }) {
		super(CountriesRepository, CountriesDto)
	}
}

module.exports = CountriesDomain
