'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class ConsignmentsController extends Controller {
	#trmService = {}
	#blockchainService = {}
	constructor({ ConsignmentsRepository, ConsignmentsDto, TrmService }) {
		super(ConsignmentsRepository, ConsignmentsDto)
		this.#trmService = TrmService
	}

	async getTransaction(dataTransaction) {
		console.log(dataTransaction)
	}

	async create(req, res) {
		const trm = await this.#trmService.get(res.transaction)
		const plan = req.plans

		// ValorEnBTC = usd x (1 / TRM(BTC-USD) ) | 15 * (1 / 7500)
		let expectedValue = plan.consignment_value * (1 / trm.value)
		expectedValue = +(Math.ceil(expectedValue + 'e+8') + 'e-8')

		req.body.trm_id = trm.id
		req.body.expected_value = expectedValue
		return await super.create(req, res)
	}

	async getEvent(req, res) {
		console.log(req.headers)
		console.log('----------------------------------------')
		console.log(req.body)
		console.log('----------------------------------------')
		console.log(req.params)
	}
}

module.exports = ConsignmentsController
