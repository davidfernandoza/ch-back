'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))

class AddressRequest extends Request {
	constructor({ JoiValidator, Config }) {
		const body = {
			clients_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(9999999999)
				.allow('')
				.optional(),
			address: JoiValidator.string().min(80).max(225).required(),
			type: JoiValidator.any().valid('consignacion', 'pago').required()
		}
		super(body, JoiValidator, Config.CSRF_TOKEN)
	}
}
module.exports = AddressRequest
