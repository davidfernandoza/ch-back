'use strict'
const { morphism } = require('morphism')

class Domain {
	constructor(EntityRepository, EntityDto) {
		this.entityRepository = EntityRepository
		this.entityDto = EntityDto
	}

	async getAll() {
		const dto = await this.entityDto.domain()
		const entities = await this.entityRepository.getAll()
		return entities.map(entity => morphism(dto, entity))
	}

	async get(id) {
		const dto = await this.entityDto.domain()
		const entity = await this.entityRepository.get(id)
		if (!entity) return null
		return morphism(dto, entity)
	}

	async create(entity) {
		const dto = await this.entityDto.domain()
		entity = morphism(dto, entity)
		const created = await this.entityRepository.create(entity)
		return morphism(dto, created)
	}

	async update(id, entity) {
		const dto = await this.entityDto.domain()
		entity.id = id
		entity = morphism(dto, entity)
		const updated = await this.entityRepository.update(id, entity)
		return updated
	}

	async delete(id) {
		return await this.entityRepository.delete(id)
	}
}

module.exports = Domain
