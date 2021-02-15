'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class UsersDto extends Dto {
	constructor() {
		const schema = {
			id: 'id',
			username: 'username'
		}
		super(schema)
	}

	async repository() {
		this.schema.password = 'password'
		this.schema.created_at = 'created_at'
		this.schema.created_at = 'updated_at'
		return this.schema
	}
}

module.exports = UsersDto
