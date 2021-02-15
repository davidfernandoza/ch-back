'use strict'
const { join } = require('path')
const Domain = require(join(__dirname, './domain'))

class PendingPaymentsDomain extends Domain {
	constructor({ PendingPaymentsRepository, PendingPaymentsDto }) {
		super(PendingPaymentsRepository, PendingPaymentsDto)
	}
}

module.exports = PendingPaymentsDomain
