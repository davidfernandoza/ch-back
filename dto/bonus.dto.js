'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class BonusDto extends Dto {
	constructor() {
		const schema = {
			id: 'id',
			terms_id: 'terms_id',
			title: 'title',
			value: 'value'
		}
		super(schema)
	}
}

module.exports = BonusDto
