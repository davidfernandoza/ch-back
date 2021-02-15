'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class ClientsRepository extends Repository {
	constructor({ DB, ClientsDto, Config }) {
		super(DB, ClientsDto, Config, 'clients')
	}
}
module.exports = ClientsRepository
