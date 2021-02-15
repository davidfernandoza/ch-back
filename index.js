'use strict'
const { join } = require('path')
const container = require(join(__dirname, './api/container'))
const app = container.resolve('App')
const config = container.resolve('Config')
const BlockchainService = container.resolve('BlockchainService')

app.start().then(async data => {
	try {
		await BlockchainService.clearEvents()
		console.info(
			`Aplicacion corriendo en -> ${config.BASE_URL}:${data.PORT}${config.BASE_API}`
		)
	} catch (error) {
		throw new Error(error)
	}
})
