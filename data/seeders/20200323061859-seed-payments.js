'use strict'

module.exports = {
	up: queryInterface => {
		return queryInterface.bulkInsert(
			'payments',
			[
				{
					address_id: 2,
					trm_id: 1,
					value: 100.0,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					address_id: 4,
					trm_id: 2,
					value: 340.0,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('payments', null, {})
	}
}
