'use strict'

const { Router } = require('express')

module.exports = ({ TermsController }) => {
	const router = Router()
	const controller = TermsController
	router.get('/', controller.getAll.bind(controller))
	router.get('/:id', controller.get.bind(controller))
	router.get('/type/:type', controller.getType.bind(controller))
	router.post('/', controller.create.bind(controller))
	router.put('/:id', controller.update.bind(controller))
	router.delete('/:id', controller.delete.bind(controller))

	return router
}
