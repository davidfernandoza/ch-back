'use strict'
const { join } = require('path')
const { morphism } = require('morphism')
const Repository = require(join(__dirname, './repository'))
const { Op } = require('sequelize')

class AddressRepository extends Repository {
	constructor({ DB, AddressDto, Config }) {
		super(DB, AddressDto, Config, 'address')
		this.status = 4
	}

	async getAvalible(transaction, addSubDto) {
		try {
			const dto = await this.entityDto.repository(addSubDto)
			const entity = await this.db[this.entity].findOne({
				where: { [Op.and]: [{ type: 'consignacion' }, { status: 'inactiva' }] },
				transaction: transaction
			})
			if (!entity) return null
			return morphism(dto, entity)
		} catch (error) {
			return null
		}
	}
}
module.exports = AddressRepository
