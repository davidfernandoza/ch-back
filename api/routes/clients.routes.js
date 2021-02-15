'use strict'

const { Router } = require('express')

module.exports = ({ ClientsController, ClientsRequest, ClientsPolitic }) => {
	const politics = [ClientsPolitic.validate.bind(ClientsPolitic)]
	const requestPublic = ClientsRequest.public.bind(ClientsRequest)
	const requestPrivate = ClientsRequest.private.bind(ClientsRequest)
	const controller = ClientsController
	const router = Router()

	router.get(
		'/',
		requestPrivate,
		// auth,
		politics,
		controller.getAll.bind(controller)
	)

	router.get(
		'/:id',
		requestPrivate,
		// auth,
		politics,
		controller.get.bind(controller)
	)

	router.post(
		'/',
		requestPublic,
		// auth,
		politics,
		controller.create.bind(controller)
	)

	router.put(
		'/:id',
		requestPrivate,
		// auth,
		politics,
		controller.update.bind(controller)
	)

	router.delete(
		'/:id',
		requestPrivate,
		// auth,
		politics,
		controller.delete.bind(controller)
	)
	return router
}
