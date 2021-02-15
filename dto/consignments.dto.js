'use strict'

const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class ConsignmentsDto extends Dto {
	constructor() {
		const schema = {
			id: 'id',
			address_id: 'address_id',
			trm_id: 'trm_id',
			status: 'status',
			expected_value: 'expected_value',
			received_value: 'received_value',
			hash: 'hash',
			time: 'time'
		}
		super(schema)
	}
}

module.exports = ConsignmentsDto
