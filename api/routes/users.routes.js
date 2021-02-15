'use strict'

const { Router } = require('express')

module.exports = ({ UsersController }) => {
	const router = Router()
	const controller = UsersController
	router.get('/', controller.getAll.bind(controller))
	router.get('/:id', controller.get.bind(controller))
	router.post('/', controller.create.bind(controller))
	router.put('/:id', controller.update.bind(controller))
	router.patch('/password/', controller.update.bind(controller))
	router.delete('/:id', controller.delete.bind(controller))

	return router
}
