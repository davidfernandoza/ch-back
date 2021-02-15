'use strict'

const { Router } = require('express')

module.exports = ({ FortnightsController }) => {
	const router = Router()
	const controller = FortnightsController
	router.get('/', controller.getAll.bind(controller))
	router.get('/:id', controller.get.bind(controller))
	router.post('/', controller.create.bind(controller))
	router.put('/:id', controller.update.bind(controller))
	router.delete('/:id', controller.delete.bind(controller))

	return router
}
