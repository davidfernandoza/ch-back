'use strict'

module.exports = {
	up: queryInterface => {
		return queryInterface.bulkInsert(
			'consignments',
			[
				{
					address_id: 1,
					trm_id: 1,
					status: 'completo',
					expected_value: 15.0,
					received_value: 15.0,
					hash:
						'16234c5a62f185e56846225dcda64d24596dcf866d39f53bf0d3f460aae496ae',
					time: 1587528695,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					address_id: 3,
					trm_id: 2,
					status: 'exedido',
					expected_value: 16.0,
					received_value: 17.0,
					hash:
						'16234c5a62f185w56846225dcda64d24596dcf866d39f53bf0d3f460aae496ae',
					time: 1587528695,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					address_id: 5,
					trm_id: 3,
					status: 'incompleto',
					expected_value: 14.0,
					received_value: 13.5,
					hash:
						'16234c5a62f185e56846225rcda64d24596dtf866d39f53bf0d3f460aae496ae',
					time: 1587528695,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					address_id: 9,
					trm_id: 4,
					status: 'completo',
					expected_value: 15.0,
					received_value: 15.0,
					hash:
						'16234c5a62f185e568r6225dcda64d24596dcy866d39f53bf0d3f460aae496ae',
					time: 1587528695,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					address_id: 10,
					trm_id: 5,
					status: 'completo',
					expected_value: 15.0,
					received_value: 15.0,
					hash:
						'16234c5a62f185e56846225deda64d24596dwf866d39f53bf0d3f460aae496ae',
					time: 1587528695,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					address_id: 11,
					trm_id: 6,
					status: 'completo',
					expected_value: 15.0,
					received_value: 15.0,
					hash:
						'16234c5a62f185e56846225deda64d24596dcf866w39f53bf0d3f460aae496ae',
					time: 1587528695,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					address_id: 12,
					trm_id: 7,
					status: 'exedido',
					expected_value: 15.0,
					received_value: 18.0,
					hash:
						'16234c5a62w185e56846225dcda64d24596dcw866d39f53bf0d3f460aae496ae',
					time: 1587528695,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					address_id: 13,
					trm_id: 8,
					status: 'completo',
					expected_value: 15.0,
					received_value: 15.0,
					hash:
						'16234c5a62f185e56846225wcda64d24596dcf866d39f53bw0d3f460aae496ae',
					time: 1587528695,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					address_id: 14,
					trm_id: 9,
					status: 'incompleto',
					expected_value: 13.0,
					received_value: 12.0,
					hash:
						'16234c5a62f185e56w46225dcda64d24596dcf866d39f53bf0d3f4c0aae496ae',
					time: 1587528695,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('consignments', null, {})
	}
}
