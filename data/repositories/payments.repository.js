'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class PaymentsRepository extends Repository {
	constructor({ DB, PaymentsDto, Config }) {
		super(DB, PaymentsDto, Config, 'payments')
	}
	// Aqui van las consultas especializadas
}
module.exports = PaymentsRepository
