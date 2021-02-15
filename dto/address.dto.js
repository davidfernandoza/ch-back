'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class AddressDto extends Dto {
	constructor() {
		const schema = {
			id: 'id',
			address: 'address',
			type: 'type',
			status: 'status'
		}
		super(schema)
	}
}

module.exports = AddressDto
