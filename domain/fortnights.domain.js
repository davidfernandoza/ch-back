'use strict'
const { join } = require('path')
const Domain = require(join(__dirname, './domain'))

class FortnightsDomain extends Domain {
	constructor({ FortnightsRepository, FortnightsDto }) {
		super(FortnightsRepository, FortnightsDto)
	}
}

module.exports = FortnightsDomain
