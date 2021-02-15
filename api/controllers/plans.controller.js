'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class PlansController extends Controller {
	constructor({ PlansRepository, PlansDto }) {
		super(PlansRepository, PlansDto)
	}
}

module.exports = PlansController
