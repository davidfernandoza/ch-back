'use strict'
const { join } = require('path')
const Domain = require(join(__dirname, './domain'))

class ConsignmentsDomain extends Domain {
	constructor({ ConsignmentsRepository, ConsignmentsDto }) {
		super(ConsignmentsRepository, ConsignmentsDto)
	}
}

module.exports = ConsignmentsDomain
