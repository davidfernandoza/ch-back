'use strict'
const { morphism } = require('morphism')
const axios = require('axios')

class TrmService {
	#trmRepository = {}
	#trmDto = {}
	#config = {}
	#method = '/prices/BTC-USD/buy'

	constructor({ TrmRepository, TrmDto, Config }) {
		this.#trmRepository = TrmRepository
		this.#config = Config
		this.#trmDto = TrmDto
	}

	// Crear TrmService para la plataforma
	async get(transaction) {
		const lastTrm = await this.#trmRepository.last()
		const addSubDto = false

		if (lastTrm) {
			return lastTrm
		}
		try {
			// trm -> data: { data: { base: 'BTC', currency: 'USD', amount: '7170.68' } }
			const trm = await axios.get(`${this.#config.COINBASE_API}${this.#method}`)
			const dto = await this.#trmDto.insert()
			const dataTrm = await morphism(dto, trm.data.data)
			const created = await this.#trmRepository.create(
				dataTrm,
				transaction,
				addSubDto
			)
			return created
		} catch (error) {
			console.error
		}
	}
}
module.exports = TrmService
