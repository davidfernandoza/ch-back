'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class CountriesController extends Controller {
	constructor({ CountriesRepository, CountriesDto }) {
		super(CountriesRepository, CountriesDto)
	}
}

module.exports = CountriesController
