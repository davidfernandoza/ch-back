'use strict'
const { join } = require('path')

module.exports = {
	AddressRequest: require(join(__dirname, './address.request')),
	ClientsRequest: require(join(__dirname, './clients.request'))
}
