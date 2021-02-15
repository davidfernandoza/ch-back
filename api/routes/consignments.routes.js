'use strict'

const { Router } = require('express')

module.exports = ({ ConsignmentsController }) => {
	const router = Router()
	const controller = ConsignmentsController
	router.get('/', controller.getAll.bind(controller))
	router.get('/:id', controller.get.bind(controller))
	router.post('/', controller.create.bind(controller))
	router.post(
		'/get-event/:http_webhook_token',
		controller.getEvent.bind(controller)
	)
	router.put('/:id', controller.update.bind(controller))
	router.delete('/:id', controller.delete.bind(controller))

	return router
}
