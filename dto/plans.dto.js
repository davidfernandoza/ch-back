'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class PlansDto extends Dto {
	constructor() {
		const schema = {
			id: 'id',
			terms_id: 'terms_id',
			title: 'title',
			consignment_value: 'consignment_value',
			sponsor_value: 'sponsor_value',
			generation_1_value: 'generation_1_value',
			generation_2_value: 'generation_2_value',
			generation_3_value: 'generation_3_value',
			generation_4_value: 'generation_4_value'
		}
		super(schema)
	}
}

module.exports = PlansDto
