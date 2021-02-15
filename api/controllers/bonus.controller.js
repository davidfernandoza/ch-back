'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class BonusController extends Controller {
	constructor({ BonusRepository, BonusDto }) {
		super(BonusRepository, BonusDto)
	}
}

module.exports = BonusController
