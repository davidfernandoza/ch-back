'use strict'
const { join } = require('path')
const { morphism } = require('morphism')
const Domain = require(join(__dirname, './domain'))

class ClientsDomain extends Domain {
	constructor({ ClientsRepository, TreeService, ClientsDto }) {
		super(ClientsRepository, ClientsDto)
		this.treeService = TreeService
	}

	async create(client) {
		let subTree = {}
		let countNodesSubTree = 0
		let iterations = 0
		const sponsorLevelSearch = client.sponsorData.search_level
		// TODO: Purgar la matris cada vez que se inicie un n

		// Compara los nodos que debe de haber en un nivel con los que en verdad hay
		do {
			if (iterations > 0) {
				client.sponsorData.search_level + 1
			}
			subTree = await this.treeService.getSubTree(client.sponsorData)
			countNodesSubTree = await this.countNodes(subTree.limits)
			countNodesSubTree = countNodesSubTree == null ? 0 : countNodesSubTree
			iterations + 1
		} while (subTree.data.amountNodes === countNodesSubTree)

		/*
		 * Busqueda de los nodos del nivel seleccionado,
		 * para luego obtener la posicion del nuevo nodo respecto al
		 * nodo mas cercano de izquierda a derecha.
		 */
		const nodesPosition = await this.getLevelNodes(subTree.limits)
		const newPosition = await this.treeService.newPosition(
			nodesPosition,
			subTree.limits.left
		)
		const fatherData = await this.getAttribute(
			newPosition.fatherPosition,
			'position'
		)

		// Creacion del nuevo usuario
		const newClient = {
			telegram_id: client.telegram_id,
			sponsor_id: client.sponsorData.id,
			generation_1_id: fatherData.id,
			generation_2_id: fatherData.generation_1_id,
			generation_3_id: fatherData.generation_2_id,
			generation_4_id: fatherData.generation_3_id,
			search_level: subTree.data.level + 1,
			state: 'activo',
			level: subTree.data.level,
			position: newPosition.position,
			full_name: client.full_name,
			username: client.username
		}

		const created = await super.create(newClient)

		// Actualizar nivel de busqueda e hijos del patrocinador
		if (sponsorLevelSearch != client.sponsorData.search_level) {
			if (newPosition.position % 3 === 2) {
				client.sponsorData.child_left_id = created.id
			} else if (newPosition.position % 3 === 1) {
				client.sponsorData.child_rigth_id = created.id
			} else {
				client.sponsorData.child_center_id = created.id
			}
			super.update(client.sponsorData.id, client.sponsorData)
		}

		return created
	}

	async getAttribute(attribute_id, attribute) {
		const dto = await this.entityDto.domain()
		const client = await this.entityRepository.getAttribute(
			attribute_id,
			attribute
		)
		if (!client) return null
		return morphism(dto, client)
	}

	async getAttributeArray(Opr, attributeArray) {
		const dto = await this.entityDto.domain()
		const client = await this.entityRepository.getAttribute(Opr, attributeArray)
		if (!client) return null
		return morphism(dto, client)
	}

	async countNodes(limits) {
		const amountNodes = await this.entityRepository.countNodes(limits)
		if (!amountNodes) return null
		return amountNodes
	}

	async getLevelNodes(limits) {
		const nodes = await this.entityRepository.getLevelNodes(limits)
		if (!nodes) return null
		return morphism({ position: 'position' }, nodes)
	}
}

module.exports = ClientsDomain
