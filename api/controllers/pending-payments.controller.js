'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class PendingPaymentsController extends Controller {
	constructor({ PendingPaymentsRepository, PendingPaymentsDto }) {
		super(PendingPaymentsRepository, PendingPaymentsDto)
	}
}

module.exports = PendingPaymentsController
