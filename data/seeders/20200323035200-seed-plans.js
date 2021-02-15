'use strict'

module.exports = {
	up: queryInterface => {
		return queryInterface.bulkInsert(
			'plans',
			[
				{
					terms_id: 2,
					title: 'Plan Basico',
					consignment_value: 15.0,
					sponsor_value: 0,
					generation_1_value: 3.0,
					generation_2_value: 2.0,
					generation_3_value: 1.0,
					generation_4_value: 3.5,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					terms_id: 3,
					title: 'Plan Patrocinador',
					consignment_value: 20.0,
					sponsor_value: 15.0,
					generation_1_value: 0,
					generation_2_value: 0,
					generation_3_value: 0,
					generation_4_value: 0,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('plans', null, {})
	}
}
