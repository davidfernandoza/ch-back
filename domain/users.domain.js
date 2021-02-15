'use strict'
const bcrypt = require('bcrypt')
const { join } = require('path')
const { morphism } = require('morphism')
const Domain = require(join(__dirname, './domain'))

class UsersDomain extends Domain {
	constructor({ UsersRepository, UsersDto }) {
		super(UsersRepository, UsersDto)
		this.usersRepository = UsersRepository
	}

	async create(user) {
		/*
		 * Encriptacion de password
		 */
		const salt = await bcrypt.genSalt(10)
		user.password = await bcrypt.hash(user.password, salt)
		return super.create(user)
	}

	// Actualiza username o password segun el tipo
	async update(id, user, type) {
		const dto = await this.entityDto.domain()
		user.id = id
		user = morphism(dto, user)
		if (type == 'password') {
			const salt = await bcrypt.genSalt(10)
			user.password = await bcrypt.hash(user.password, salt)
			return this.usersRepository.updatePassword(id, user)
		}
		return this.usersRepository.updateUsername(id, user)
	}
}

module.exports = UsersDomain
