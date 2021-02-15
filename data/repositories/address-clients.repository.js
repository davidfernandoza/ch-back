'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class AddressClientsRepository extends Repository {
	constructor({ DB, AddressClientsDto, Config }) {
		super(DB, AddressClientsDto, Config, 'address_clients')
	}
	// Aqui van las consultas especializadas
}
module.exports = AddressClientsRepository
