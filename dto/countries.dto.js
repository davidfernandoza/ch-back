'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class CountriesDto extends Dto {
	constructor() {
		const schema = {
			id: 'id',
			name: 'name',
			prefix: 'prefix'
		}
		super(schema)
	}
}

module.exports = CountriesDto
