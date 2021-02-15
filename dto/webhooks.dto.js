'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class WebhooksDto extends Dto {
	constructor() {
		const schema = {
			id: 'id',
			address: 'address',
			clients_id: 'clients_id'
		}
		super(schema)
	}
}

module.exports = WebhooksDto
