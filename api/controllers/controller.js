'use strict'
const bcrypt = require('bcrypt')
const { join } = require('path')
const { morphism } = require('morphism')
const { DoneString } = require(join(__dirname, '../strings'))

class Controller {
	constructor(EntityRepository, EntityDto, Config) {
		this.entityRepository = EntityRepository
		this.entityDto = EntityDto
		this.doneString = DoneString
		if (Config) {
			this.config = Config
		}
	}

	async getAttribute(attribut, match, transaction, addSubDto) {
		transaction = !transaction ? null : transaction
		let entity = await this.entityRepository.getAttributes(
			attribut,
			match,
			transaction,
			addSubDto
		)
		return entity
	}

	async getAllAttribute(attribut, match, transaction, addSubDto) {
		transaction = !transaction ? null : transaction
		let entity = await this.entityRepository.getAllAttributes(
			attribut,
			match,
			transaction,
			addSubDto
		)
		return entity
	}

	async getAll(req, res) {
		const addSubDto = !req.addSubDto ? true : req.addSubDto
		const transaction = !req.transaction ? null : req.transaction
		let entities = await this.entityRepository.getAll(transaction, addSubDto)
		if (req.return || transaction) return entities
		await this.response(res, entities, addSubDto, 'DON200L')
	}

	async get(req, res) {
		const { id } = req.params
		const addSubDto = !req.addSubDto ? true : req.addSubDto
		const transaction = !req.transaction ? null : req.transaction
		let entity = await this.entityRepository.get(id, transaction, addSubDto)
		if (req.return || transaction) return entity
		await this.response(res, entity, addSubDto, 'DON200')
	}

	async create(req, res) {
		const { body } = req
		const addSubDto = !req.addSubDto ? false : req.addSubDto
		const transaction = !req.transaction ? null : req.transaction
		let created = await this.entityRepository.create(
			body,
			transaction,
			addSubDto
		)
		if (req.return || transaction) return created
		await this.response(res, created, addSubDto, 'DON201')
	}

	async update(req, res) {
		const { body } = req
		const { id } = req.params
		const addSubDto = !req.addSubDto ? false : req.addSubDto
		const transaction = !req.transaction ? null : req.transaction
		const dto = !req.dto ? null : req.dto

		const updated = await this.entityRepository.update(
			id,
			body,
			dto,
			transaction,
			addSubDto
		)
		if (req.return || transaction) return updated
		await this.response(res, updated, addSubDto, 'DON204')
	}

	async delete(req, res) {
		const { id } = req.params
		const transaction = !req.transaction ? null : req.transaction
		const deleted = await this.entityRepository.delete(id, transaction)
		await this.response(res, deleted, false, 'DON204')
	}

	async password(req, res) {
		let { password } = req.body
		const id = req.idUser
		const round = parseInt(this.config.SALT_CRYPT)
		const salt = await bcrypt.genSalt(round)
		password = await bcrypt.hash(password, salt)
		const updated = await this.entityRepository.password(id, { password })
		await this.response(res, updated, false, 'DON204')
	}

	// ----------------------------------------------------------------------

	// Funcion que responde al cliente
	async response(res, entity, addSubDto, code, typeDto) {
		/*
		 * Atributo no encontrado
		 */
		if (!entity) {
			this.doneString.DON404.payload = entity
			return res
				.status(this.doneString.DON404.status)
				.send(this.doneString.DON404)
		}

		// Atributo OK
		if (code == 'DON200' || code == 'DON201' || code == 'DON200L') {
			const dto = !typeDto
				? await this.entityDto.api(addSubDto)
				: await this.entityDto[typeDto](addSubDto)
			if (code == 'DON200L') {
				entity = entity.map(item => morphism(dto, item))
				code = 'DON200'
			} else {
				entity = morphism(dto, entity)
			}
		}
		this.doneString[code].payload = entity
		return res.status(this.doneString[code].status).send(this.doneString[code])
	}
}

module.exports = Controller
