'use strict'
const { join } = require('path')
const Domain = require(join(__dirname, './domain'))

class AddressDomain extends Domain {
	constructor({ AddressRepository, AddressDto }) {
		super(AddressRepository, AddressDto)
	}
}

module.exports = AddressDomain
