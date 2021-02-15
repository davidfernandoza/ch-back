'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class UsersRepository extends Repository {
	constructor({ DB, UsersDto, Config }) {
		super(DB, UsersDto, Config, 'users')
		this.db = DB
	}

	// Aqui van las consultas especializadas
	updateUsername(id, user) {
		delete user.password
		return super.update(id, user)
	}

	updatePassword(id, user) {
		delete user.username
		return super.update(id, user)
	}
}
module.exports = UsersRepository
