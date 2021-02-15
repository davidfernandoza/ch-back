'use strict'

module.exports = {
	up: queryInterface => {
		return queryInterface.bulkInsert(
			'consignments_fortnights',
			[
				{
					consignments_id: 1,
					fortnights_id: 1,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					consignments_id: 2,
					fortnights_id: 1,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					consignments_id: 3,
					fortnights_id: 1,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					consignments_id: 4,
					fortnights_id: 1,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					consignments_id: 5,
					fortnights_id: 1,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					consignments_id: 6,
					fortnights_id: 1,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					consignments_id: 7,
					fortnights_id: 1,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					consignments_id: 8,
					fortnights_id: 1,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					consignments_id: 9,
					fortnights_id: 1,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('consignments_fortnights', null, {})
	}
}
