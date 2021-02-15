'use strict'

module.exports = {
	up: queryInterface => {
		return queryInterface.bulkInsert(
			'countries',
			[
				{
					name: 'Colombia',
					prefix: 57,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'Ecuador',
					prefix: 593,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'Peru',
					prefix: 51,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'Panama',
					prefix: 507,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'Venezuela',
					prefix: 58,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('countries', null, {})
	}
}
