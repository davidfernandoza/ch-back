'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class PaymentsController extends Controller {
	constructor({ PaymentsRepository, PaymentsDto }) {
		super(PaymentsRepository, PaymentsDto)
	}
}

module.exports = PaymentsController
