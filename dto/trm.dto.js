'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))
let schema = {}

class TrmDto extends Dto {
	constructor() {
		schema = {
			id: 'id',
			value: 'value'
		}
		super(schema)
	}

	async insert(addSubDto) {
		const insertSchema = { ...schema }
		delete insertSchema.value
		insertSchema.value = 'amount'
		this.schema = insertSchema
		const dto = await super.repository(addSubDto)
		this.schema = schema
		return dto
	}
}

module.exports = TrmDto
