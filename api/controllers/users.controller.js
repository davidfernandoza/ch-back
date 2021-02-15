'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class UsersController extends Controller {
	constructor({ UsersRepository, UsersDto }) {
		super(UsersRepository, UsersDto)
	}

	async update(req, res) {
		const { body } = req
		const { id } = req.params
		const type = req.type
		delete req.type
		await this.usersRepository.update(id, body, type)
		return res.status(204).send()
	}
}

module.exports = UsersController
