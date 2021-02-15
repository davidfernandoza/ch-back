'use strict'

module.exports = {
	up: queryInterface => {
		return queryInterface.bulkInsert(
			'pending_payments',
			[
				{
					consignments_id: 1,
					payments_id: 1,
					plans_id: 1,
					clients_id: 1,
					bonus_id: null,
					value: 100.0,
					payment_date: new Date().toDateString(),
					state: 'pagado',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					consignments_id: 2,
					payments_id: 2,
					plans_id: 1,
					clients_id: 2,
					bonus_id: null,
					value: 340.0,
					payment_date: new Date().toDateString(),
					state: 'pagado',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					consignments_id: 3,
					payments_id: null,
					plans_id: 1,
					clients_id: 3,
					bonus_id: null,
					value: 540.0,
					payment_date: null,
					state: 'activo',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					consignments_id: 4,
					payments_id: null,
					plans_id: 1,
					clients_id: 4,
					bonus_id: null,
					value: 670.0,
					payment_date: null,
					state: 'activo',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					consignments_id: 5,
					payments_id: null,
					plans_id: 1,
					clients_id: 5,
					bonus_id: null,
					value: 890.0,
					payment_date: null,
					state: 'activo',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					consignments_id: 6,
					payments_id: null,
					plans_id: 1,
					clients_id: 6,
					bonus_id: null,
					value: 370.0,
					payment_date: null,
					state: 'activo',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					consignments_id: 7,
					payments_id: null,
					plans_id: 1,
					clients_id: 7,
					bonus_id: null,
					value: 130.0,
					payment_date: null,
					state: 'activo',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					consignments_id: 8,
					payments_id: null,
					plans_id: 1,
					clients_id: 8,
					bonus_id: null,
					value: 589.0,
					payment_date: null,
					state: 'activo',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					consignments_id: 9,
					payments_id: null,
					plans_id: 1,
					clients_id: 9,
					bonus_id: null,
					value: 370.0,
					payment_date: null,
					state: 'activo',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('pending_payments', null, {})
	}
}
