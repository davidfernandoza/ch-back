'use strict'

module.exports = {
	up: queryInterface => {
		const date = new Date()
		const days = 15
		date.setDate(date.getDate() + days)
		return queryInterface.bulkInsert(
			'fortnights',
			[
				{
					number: 1,
					start_date: new Date().toDateString(),
					cut_date: date.toDateString(),
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('fortnights', null, {})
	}
}
