'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class PaymentsDto extends Dto {
	constructor() {
		const schema = {
			id: 'id',
			address_id: 'address_id',
			trm_id: 'trm_id',
			value: 'value'
		}
		super(schema)
	}
}

module.exports = PaymentsDto
