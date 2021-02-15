'use strict'

module.exports = {
	up: queryInterface => {
		return queryInterface.bulkInsert(
			'bonus',
			[
				{
					terms_id: 4,
					title: 'Bono Lider',
					value: 100.0, // USD
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('bonus', null, {})
	}
}
