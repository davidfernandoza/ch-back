'use strict'
const { join } = require('path')
const Domain = require(join(__dirname, './domain'))

class PaymentsDomain extends Domain {
	constructor({ PaymentsRepository, PaymentsDto }) {
		super(PaymentsRepository, PaymentsDto)
	}
}

module.exports = PaymentsDomain
