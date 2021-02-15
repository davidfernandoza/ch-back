'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class ErrorsHandlersDto extends Dto {
	constructor() {
		const schema = {
			id: 'id',
			name: 'name',
			message: 'message',
			stack: 'stack'
		}
		super(schema)
	}
}

module.exports = ErrorsHandlersDto
