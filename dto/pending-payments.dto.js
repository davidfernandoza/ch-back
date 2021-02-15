'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class PendingPaymentsDto extends Dto {
	constructor() {
		const schema = {
			id: 'id',
			bonus_id: 'bonus_id',
			clients_id: 'clients_id',
			consignments_id: 'consignments_id',
			payments_id: 'payments_id',
			plans_id: 'plans_id',
			value: 'value',
			payment_date: 'payment_date',
			state: 'state'
		}
		super(schema)
	}
}

module.exports = PendingPaymentsDto
