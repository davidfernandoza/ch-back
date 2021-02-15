'use strict'
/*
 * Este servicio escucha las transacciones del blockchain de BTC,
 * obteniendo solo las direcciones de consignación que existen
 * en la base de datos.
 */

const blockcypher = require('blockcypher')

class BlockchainService {
	#blockcypherApi = {}
	#config = {}
	#jwtServices = {}
	#rol = 'webhooks'
	#webhooksRepository = {}
	#webhookUrlServices = {}

	constructor({ Config, WebhookUrlService, WebhooksRepository, JWTService }) {
		this.#config = Config
		this.#blockcypherApi = new blockcypher(
			this.#config.BLOCKCYPHER_COIN,
			this.#config.BLOCKCYPHER_REQUEST,
			this.#config.BLOCKCYPHER_TOKEN
		)
		this.#jwtServices = JWTService
		this.#webhooksRepository = WebhooksRepository
		this.#webhookUrlServices = WebhookUrlService
	}

	/*
	 * Se genera WebHook para escuchar las transacciones de las diferentes direcciones BTC
	 * entregadas en el metodo
	 */
	async generateEvent(address, idClient) {
		/*
		 * Test Api = 'https://en7jdxsrpq8xt.x.pipedream.net/'
		 * Url donde el webhook responde a los eventos creados
		 * Se crea con un token unico por transacción
		 */
		let urlApi = await this.#webhookUrlServices.get()
		let httpHookToken = await this.#jwtServices.create(
			idClient, // Id
			this.#rol, //Rol
			this.#config.BLOCKCYPHER_TOKEN // Token
		)

		urlApi +=
			this.#config.BASE_API +
			this.#config.BLOCKCYPHER_API_GET +
			httpHookToken.payload.Token

		const webhook = {
			event: this.#config.BLOCKCYPHER_EVENT,
			address: address,
			url: urlApi
		}

		this.#blockcypherApi.createHook(webhook, (error, data) => {
			data.clients_id = idClient
			this.createCallback(error, data)
			// .bind(this)
		})
	}

	async deleteEvent(id) {
		this.#blockcypherApi.delHook(id, (error, data) => {
			this.deleteCallback(error, data, id)
		})
	}

	async clearEvents() {
		this.#blockcypherApi.listHooks((error, data) => {
			if (error !== null) throw new Error(error)
			data.forEach(element => {
				this.deleteEvent(element.id)
			})
		})
	}

	/*
	 * Callbacks
	 */
	// -------------------------------------------------------------
	async deleteCallback(error, data, id) {
		if (error !== null) throw new Error(error)
		else {
			try {
				if (this.#config.NODE_ENV == 'development') {
					console.info('Delete: ----------------------------')
					console.info(id)
					console.info('------------------------------------')
				}
				await this.#webhooksRepository.delete(id)
			} catch (error) {
				throw new Error(error)
			}
		}
	}

	async createCallback(error, data) {
		if (error !== null) throw new Error(error)
		else {
			try {
				if (this.#config.NODE_ENV == 'development') {
					const created = await this.#webhooksRepository.create(data)
					console.info('Created: ---------------------------')
					console.info(created)
					console.info('------------------------------------')
				} else {
					await this.#webhooksRepository.create(data)
				}
			} catch (error) {
				throw new Error(error)
			}
		}
	}
}
module.exports = BlockchainService
