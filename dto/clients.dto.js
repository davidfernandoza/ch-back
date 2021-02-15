'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class ClientsDto extends Dto {
	constructor({ AddressDto, ConsignmentsDto }) {
		const schema = {
			id: 'id',
			countries_id: 'countries_id',
			plans_id: 'plans_id',
			sponsor_id: 'sponsor_id',
			trees_id: 'trees_id',
			telegram_id: 'telegram_id',
			full_name: 'full_name',
			username: 'username',
			phone: 'phone',
			state: 'state'
		}
		super(schema, [AddressDto, ConsignmentsDto], ['address', 'consignment'])
	}
}

module.exports = ClientsDto
