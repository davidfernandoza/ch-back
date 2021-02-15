'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class FortnightsController extends Controller {
	constructor({ FortnightsRepository, FortnightsDto }) {
		super(FortnightsRepository, FortnightsDto)
	}
}

module.exports = FortnightsController
