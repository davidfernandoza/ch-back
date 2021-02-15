'use strict'

const { Router } = require('express')

module.exports = ({ AddressController, AddressRequest }) => {
	const router = Router()
	const controller = AddressController
	// const requestPrivate = AddressRequest.private.bind(AddressRequest)
	const requestPublic = AddressRequest.public.bind(AddressRequest)

	router.get('/', controller.getAll.bind(controller))
	router.get('/:id', controller.get.bind(controller))
	router.post('/', requestPublic, controller.create.bind(controller))
	router.put('/:id', controller.update.bind(controller))
	router.delete('/:id', controller.delete.bind(controller))
	return router
}
