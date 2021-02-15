'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class ConsignmentsRepository extends Repository {
	constructor({ DB, ConsignmentsDto, Config }) {
		super(DB, ConsignmentsDto, Config, 'consignments')
	}
	// Aqui van las consultas especializadas
}
module.exports = ConsignmentsRepository
