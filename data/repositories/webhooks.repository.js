'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class WebhooksRepository extends Repository {
	constructor({ DB, WebhooksDto, Config }) {
		super(DB, WebhooksDto, Config, 'webhooks')
	}
	// Aqui van las consultas especializadas
}
module.exports = WebhooksRepository
