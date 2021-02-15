'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class TermsDto extends Dto {
	constructor() {
		const schema = {
			id: 'id',
			description: 'description',
			type: 'type'
		}
		super(schema)
	}
}

module.exports = TermsDto
