'use strict'

module.exports = {
	ERR400: {
		status: 400,
		name: 'Bad Request',
		code: 'ERR400',
		message: 'Consulta incorrecta'
	},
	ERR401: {
		status: 401,
		name: 'Unauthorized',
		code: 'ERR401',
		message: 'No autorizado para solicitar recursos'
	},
	ERR403: {
		status: 403,
		name: 'Forbidden',
		code: 'ERR403',
		message: 'No existen los permisos suficientes'
	},
	ERR404: {
		status: 404,
		name: 'Not Found',
		code: 'ERR404',
		message: 'Recurso no encontrado'
	},
	ERR500: {
		status: 500,
		name: 'Internal Server Error',
		code: 'ERR500',
		message: 'Error interno del servidor'
	}
}
