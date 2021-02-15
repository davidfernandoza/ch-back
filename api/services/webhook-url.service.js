'use strict'
const ngrok = require('ngrok')

class WebhookUrlService {
	#config = {}

	constructor({ Config }) {
		this.#config = Config
	}

	// Retorna la url en que esta corriendo la app para recibir los eventos de webhooks
	async get() {
		if (this.#config.NODE_ENV != 'production') {
			await ngrok.authtoken(this.#config.BRIDGE_TOKEN)
			return await ngrok.connect(this.#config.PORT)
		} else {
			return this.#config.ORIGIN
		}
	}
}

module.exports = WebhookUrlService
