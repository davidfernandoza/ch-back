'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class TressDto extends Dto {
	constructor() {
		const schema = {
			id: 'id',
			left_id: 'left_id',
			center_id: 'center_id',
			rigth_id: 'rigth_id',
			generation_1_id: 'generation_1_id',
			generation_2_id: 'generation_2_id',
			generation_3_id: 'generation_3_id',
			generation_4_id: 'generation_4_id',
			search_level: 'search_level',
			level: 'level',
			position: 'position'
		}
		super(schema)
	}
}

module.exports = TressDto
