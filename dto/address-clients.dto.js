'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class AddressClientsDto extends Dto {
	constructor() {
		const schema = {
			id: 'id',
			address_id: 'address_id',
			clients_id: 'clients_id'
		}
		super(schema)
	}
}

module.exports = AddressClientsDto
