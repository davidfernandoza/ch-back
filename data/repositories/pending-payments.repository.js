'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class PendingPaymentsRepository extends Repository {
	constructor({ DB, PendingPaymentsDto, Config }) {
		super(DB, PendingPaymentsDto, Config, 'pending_payments')
	}
	// Aqui van las consultas especializadas
}
module.exports = PendingPaymentsRepository
