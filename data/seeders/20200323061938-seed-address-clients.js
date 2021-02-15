'use strict'

module.exports = {
	up: queryInterface => {
		return queryInterface.bulkInsert(
			'address_clients',
			[
				// Consignacion
				{
					address_id: 1,
					clients_id: 1,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					address_id: 3,
					clients_id: 2,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					address_id: 5,
					clients_id: 3,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					address_id: 9,
					clients_id: 4,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					address_id: 10,
					clients_id: 5,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					address_id: 11,
					clients_id: 6,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					address_id: 12,
					clients_id: 7,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					address_id: 13,
					clients_id: 8,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					address_id: 14,
					clients_id: 9,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					address_id: 15,
					clients_id: 10,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				// Direcciones para pago
				{
					address_id: 2,
					clients_id: 1,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					address_id: 4,
					clients_id: 2,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					address_id: 6,
					clients_id: 3,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					address_id: 7,
					clients_id: 4,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					address_id: 8,
					clients_id: 5,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					address_id: 4,
					clients_id: 6,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					address_id: 2,
					clients_id: 7,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					address_id: 7,
					clients_id: 8,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					address_id: 6,
					clients_id: 9,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('address_clients', null, {})
	}
}
