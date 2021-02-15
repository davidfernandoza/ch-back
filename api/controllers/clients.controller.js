'use strict'
const { join } = require('path')
const { morphism } = require('morphism')
const Controller = require(join(__dirname, './controller'))

class ClientsController extends Controller {
	#addressController = {}
	#addressClientsRepository = {}
	#blockchainService = {}
	#consignmentsController = {}
	#plansController = {}
	#sequelize = {}
	#status = 'inactivo'
	#error = 'Transaccion Rechazada en Cliente'

	constructor({
		AddressClientsRepository,
		AddressController,
		BlockchainService,
		ClientsRepository,
		ClientsDto,
		ConsignmentsController,
		DB,
		PlansController
	}) {
		super(ClientsRepository, ClientsDto)

		this.#addressClientsRepository = AddressClientsRepository
		this.#addressController = AddressController
		this.#consignmentsController = ConsignmentsController
		this.#plansController = PlansController
		this.#blockchainService = BlockchainService

		// Paquete para transaccion sequelize
		this.#sequelize = DB.sequelize
	}

	/*
	 * a) Consulta de patrocinador
	 * b) Creación de cliente
	 * c) Consulta de dirección
	 * d) Actualización de dirección
	 * e) Creación de relación entre el cliente y la dirección
	 * f) Consultar informacion del plan - inyecta a la consignacion para el calculo de valor esperado
	 * g) Generar consignacion
	 * h) Crear evento de webhooks para la escuchar las transacciones de las direcciones
	 */
	async create(req, res) {
		try {
			let address = {},
				clients = {},
				consignment = {},
				plans = {},
				resCreated = {},
				resUpdated = 0

			// Inciar una transaccion
			req.transaction = await this.#sequelize.transaction()

			const addressClients = {},
				addressUpdate = {
					transaction: req.transaction,
					params: {}
				},
				consignmentCreate = {
					transaction: req.transaction,
					body: {}
				},
				addSubDto = true,
				statusAddress = 'activa',
				statusConsignments = 'pendiente',
				plansPrepare = {
					transaction: req.transaction,
					addSubDto: false,
					params: {}
				}

			// a)
			req.body.state = this.#status
			req.body.sponsor_id = await this.getSponsorId(
				req.body.sponsor_telegram_id,
				req.transaction
			)

			// b)
			clients = await super.create(req, res)

			// c)
			address = await this.#addressController.getAvalible(req, res)

			// d)
			address.status = statusAddress
			addressUpdate.params.id = address.id
			addressUpdate.body = address
			resUpdated = await this.#addressController.update(addressUpdate, res)

			// e)
			addressClients.address_id = address.id
			addressClients.clients_id = clients.id
			resCreated = await this.#addressClientsRepository.create(
				addressClients,
				req.transaction
			)

			// f)
			plansPrepare.params.id = req.body.plans_id
			plans = await this.#plansController.get(plansPrepare, res)

			// g)
			consignmentCreate.plans = plans
			consignmentCreate.body.address_id = address.id
			consignmentCreate.body.status = statusConsignments
			consignment = await this.#consignmentsController.create(
				consignmentCreate,
				req
			)

			if (!clients || !address || resUpdated == 0 || !resCreated) {
				throw new Error(this.#error)
			}

			// h)
			await this.#blockchainService.generateEvent(address.address, clients.id)

			// Generar Commit en la transaccion
			await req.transaction.commit()
			clients.address = [address] // En array para el mapeo del SUB-DTO
			clients.consignment = [consignment]
			await super.response(res, clients, addSubDto, 'DON201')
		} catch (error) {
			await req.transaction.rollback()

			// Validar si el error viene de la base de datos
			let validateDB = true
			try {
				JSON.stringify(JSON.parse(error.message))
			} catch (error) {
				validateDB = false
			}

			if (validateDB) {
				throw new Error(JSON.stringify(JSON.parse(error.message)))
			} else {
				throw new Error(error)
			}
		}
	}

	// ---------------------------------------------------------------

	async getSponsorId(sponsorTelegramId, transaction) {
		const addSubDto = false
		const attribut = 'telegram_id'
		const data = await super.getAttribute(
			attribut,
			sponsorTelegramId,
			transaction,
			addSubDto
		)
		if (!data) return '1' // si no existe se asigna el 1 por defecto
		const sponsor = morphism({ id: 'id' }, data)
		return sponsor.id
	}
}

module.exports = ClientsController
