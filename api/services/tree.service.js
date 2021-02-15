'use strict'

class TreeService {
	constructor() {
		this.nodes = {
			limits: {
				center: null,
				left: null,
				rigth: null
			},
			data: {
				level: null,
				amountNodes: null
			}
		}
	}

	async getSubTree(sponsor) {
		/*
		 *Exponete-nivel del sub-arbol donde se buscar los nodos
		 */
		const exponent = sponsor.search_level - sponsor.level

		// Cantidad de nodos en el nivel del sub arbol
		const amountNodes = 3 ** exponent

		// Cantidad de nodos hacia la derecha e izquierda de los limites.
		const amountNodesLR = Math.floor(amountNodes / 2)

		/*
		 * Numero de posicion limite central, derecha e izquierda del sub-arbol de busqueda
		 * Datos del sub-arbol
		 */
		this.nodes.limits.center = sponsor.position * amountNodes
		this.nodes.limits.left = this.nodes.limits.center - amountNodesLR
		this.nodes.limits.rigth = this.nodes.limits.center + amountNodesLR
		this.nodes.data.level = exponent
		this.nodes.data.amountNodes = amountNodes
		return this.nodes
	}

	newPosition(nodesPosition, nodeLeft) {
		let position = nodeLeft
		if (nodesPosition.length != 0) {
			nodesPosition.some((item, index) => {
				position = item.position + 1
				if (nodesPosition.length == index + 1) {
					return true // ultima posicion
				} else if (position != nodesPosition[index + 1].position) {
					return true // posicion encontrada
				}
			})
		}

		// Optener datos del padre de este nuevo nodo
		return {
			position,
			fatherPosition: Math.round(position / 3)
		}
	}
}
module.exports = TreeService
