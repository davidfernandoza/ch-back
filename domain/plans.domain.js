'use strict'
const { join } = require('path')
const Domain = require(join(__dirname, './domain'))

class PlansDomain extends Domain {
	constructor({ PlansRepository, PlansDto }) {
		super(PlansRepository, PlansDto)
	}
}

module.exports = PlansDomain
