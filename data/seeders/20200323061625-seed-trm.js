'use strict'

module.exports = {
	up: queryInterface => {
		return queryInterface.bulkInsert(
			'trm',
			[
				{
					value: 2991.9,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					value: 4591.9,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					value: 2991.9,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					value: 984.9,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					value: 215.9,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					value: 271.9,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					value: 895.9,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					value: 791.9,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					value: 81.9,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('trm', null, {})
	}
}
