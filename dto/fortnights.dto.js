'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class FortnightsDto extends Dto {
	constructor() {
		const schema = {
			id: 'id',
			number: 'number',
			start_date: 'start_date',
			cut_date: 'cut_date'
		}
		super(schema)
	}
}

module.exports = FortnightsDto
