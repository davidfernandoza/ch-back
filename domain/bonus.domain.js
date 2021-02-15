'use strict'
const { join } = require('path')
const Domain = require(join(__dirname, './domain'))

class BonusDomain extends Domain {
	constructor({ BonusRepository, BonusDto }) {
		super(BonusRepository, BonusDto)
	}
}

module.exports = BonusDomain
