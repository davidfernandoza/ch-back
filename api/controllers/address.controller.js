'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class AddressController extends Controller {
	#addressRepository = {}

	constructor({ AddressRepository, AddressDto }) {
		super(AddressRepository, AddressDto)
		this.#addressRepository = AddressRepository
	}

	async getAvalible(req, res) {
		const transaction = !req.transaction ? null : req.transaction
		const address = this.#addressRepository.getAvalible(transaction)
		if (req.return || transaction) return address
		await this.response(res, address, 'DON200')
	}
}

module.exports = AddressController
