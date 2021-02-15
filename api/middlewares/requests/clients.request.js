'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))

class ClientsRequest extends Request {
	constructor({ JoiValidator, Config }) {
		const body = {
			telegram_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			sponsor_telegram_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			full_name: JoiValidator.string().min(7).max(65).required(),
			username: JoiValidator.string().min(3).max(45).required()
		}
		super(body, JoiValidator, Config.CSRF_TOKEN)
	}
}
module.exports = ClientsRequest
