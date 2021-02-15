'use strict'

module.exports = {
	up: queryInterface => {
		return queryInterface.bulkInsert(
			'trees',
			[
				{
					// Nodo 1
					left_id: 2,
					center_id: 3,
					rigth_id: 4,
					generation_1_id: null,
					generation_2_id: null,
					generation_3_id: null,
					generation_4_id: null,
					search_level: 2,
					level: 0,
					position: 1,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					// Nodo 2
					left_id: 5,
					center_id: 6,
					rigth_id: 7,
					generation_1_id: 1,
					generation_2_id: null,
					generation_3_id: null,
					generation_4_id: null,
					search_level: 3,
					level: 1,
					position: 2,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					// Nodo 3
					left_id: 8,
					center_id: 9,
					rigth_id: null,
					generation_1_id: 1,
					generation_2_id: null,
					generation_3_id: null,
					generation_4_id: null,
					search_level: 2,
					level: 1,
					position: 3,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					// Nodo 4
					left_id: 10,
					center_id: null,
					rigth_id: null,
					generation_1_id: 1,
					generation_2_id: null,
					generation_3_id: null,
					generation_4_id: null,
					search_level: 3,
					level: 2,
					position: 4,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					// Nodo 5
					left_id: null,
					center_id: null,
					rigth_id: null,
					generation_1_id: 2,
					generation_2_id: 1,
					generation_3_id: null,
					generation_4_id: null,
					search_level: 3,
					level: 2,
					position: 5,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					// Nodo 6
					left_id: null,
					center_id: null,
					rigth_id: null,
					generation_1_id: 2,
					generation_2_id: 1,
					generation_3_id: null,
					generation_4_id: null,
					search_level: 3,
					level: 2,
					position: 6,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					// Nodo 7
					left_id: null,
					center_id: null,
					rigth_id: null,
					generation_1_id: 2,
					generation_2_id: 1,
					generation_3_id: null,
					generation_4_id: null,
					search_level: 3,
					level: 2,
					position: 7,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					// Nodo 8
					left_id: null,
					center_id: null,
					rigth_id: null,
					generation_1_id: 3,
					generation_2_id: 1,
					generation_3_id: null,
					generation_4_id: null,
					search_level: 3,
					level: 2,
					position: 8,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					// Nodo 9
					left_id: null,
					center_id: null,
					rigth_id: null,
					generation_1_id: 3,
					generation_2_id: 1,
					generation_3_id: null,
					generation_4_id: null,
					search_level: 3,
					level: 2,
					position: 9,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					// Nodo 11
					left_id: null,
					center_id: null,
					rigth_id: null,
					generation_1_id: 4,
					generation_2_id: 1,
					generation_3_id: null,
					generation_4_id: null,
					search_level: 3,
					level: 2,
					position: 11,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('trees', null, {})
	}
}
