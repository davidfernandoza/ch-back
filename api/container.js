'use strict'

/* -----------------------------------------------------*/
/* System: 																							*/
/*------------------------------------------------------*/
const { join } = require('path')
const { asClass, asFunction, asValue, createContainer } = require('awilix')
const JoiValidator = require('@hapi/joi')
const StartUp = require(join(__dirname, './startup'))
const Server = require(join(__dirname, './server'))
const Routes = require(join(__dirname, './routes'))
const Config = require(join(__dirname, '../config/env'))
const DB = require(join(__dirname, '../data/models'))
const container = createContainer()

/* -----------------------------------------------------*/
/* Routes: 																							*/
/*------------------------------------------------------*/
const AddressRoutes = require(join(__dirname, './routes/address.routes'))
const BonusRoutes = require(join(__dirname, './routes/bonus.routes'))
const ClientsRoutes = require(join(__dirname, './routes/clients.routes'))
const ConsignmentsRoutes = require(join(
	__dirname,
	'./routes/consignments.routes'
))
const CountriesRoutes = require(join(__dirname, './routes/countries.routes'))
const FortnightsRoutes = require(join(__dirname, './routes/fortnights.routes'))
const PaymentsRoutes = require(join(__dirname, './routes/payments.routes'))
const PendingPaymentsRoutes = require(join(
	__dirname,
	'./routes/pending-payments.routes'
))
const PlansRoutes = require(join(__dirname, './routes/plans.routes'))
const TermsRoutes = require(join(__dirname, './routes/terms.routes'))
const UsersRoutes = require(join(__dirname, './routes/users.routes'))

/* -----------------------------------------------------*/
/* Middlewares: 																				*/
/*------------------------------------------------------*/
const { AuthMiddleware, ErrorHandleMiddleware } = require(join(
	__dirname,
	'./middlewares'
))

/* -----------------------------------------------------*/
/* Politics: 																				*/
/*------------------------------------------------------*/
const { ClientsPolitic } = require(join(__dirname, './middlewares/politics'))

/* -----------------------------------------------------*/
/* Requests: 																						*/
/*------------------------------------------------------*/
const { AddressRequest, ClientsRequest } = require(join(
	__dirname,
	'./middlewares/requests'
))

/* -----------------------------------------------------*/
/* Controllers: 																				*/
/*------------------------------------------------------*/
const {
	AddressController,
	BonusController,
	ClientsController,
	ConsignmentsController,
	CountriesController,
	FortnightsController,
	PaymentsController,
	PendingPaymentsController,
	PlansController,
	TermsController,
	TreesController,
	TrmController,
	UsersController
} = require(join(__dirname, './controllers'))

/* -----------------------------------------------------*/
/* Repositories: 																				*/
/*------------------------------------------------------*/
const {
	AddressRepository,
	AddressClientsRepository,
	BonusRepository,
	ClientsRepository,
	ConsignmentsRepository,
	CountriesRepository,
	FortnightsRepository,
	PaymentsRepository,
	PendingPaymentsRepository,
	PlansRepository,
	TermsRepository,
	TreesRepository,
	TokenBlackListRepository,
	TrmRepository,
	UsersRepository,
	WebhooksRepository
} = require(join(__dirname, '../data/repositories'))

/* -----------------------------------------------------*/
/* DTOS: 																								*/
/*------------------------------------------------------*/
const {
	AddressDto,
	AddressClientsDto,
	BonusDto,
	ClientsDto,
	ConsignmentsDto,
	CountriesDto,
	FortnightsDto,
	PaymentsDto,
	PendingPaymentsDto,
	PlansDto,
	TermsDto,
	TreesDto,
	TrmDto,
	UsersDto,
	WebhooksDto
} = require(join(__dirname, '../dto'))

/* -----------------------------------------------------*/
/* Services: 																						*/
/*------------------------------------------------------*/
const {
	BlockchainService,
	JWTService,
	TreeService,
	TrmService,
	WebhookUrlService
} = require(join(__dirname, './services'))

/* -----------------------------------------------------*/
/* Registers for inyections:	 													*/
/*------------------------------------------------------*/
container

	/*
	 * System:
	 */
	.register({
		App: asClass(StartUp).singleton(),
		Server: asClass(Server).singleton(),
		Config: asValue(Config),
		DB: asValue(DB)
	})

	/*
	 * Routes:
	 */
	.register({
		Routes: asFunction(Routes).singleton()
	})
	.register({
		AddressRoutes: asFunction(AddressRoutes).singleton(),
		BonusRoutes: asFunction(BonusRoutes).singleton(),
		ClientsRoutes: asFunction(ClientsRoutes).singleton(),
		ConsignmentsRoutes: asFunction(ConsignmentsRoutes).singleton(),
		CountriesRoutes: asFunction(CountriesRoutes).singleton(),
		FortnightsRoutes: asFunction(FortnightsRoutes).singleton(),
		PaymentsRoutes: asFunction(PaymentsRoutes).singleton(),
		PendingPaymentsRoutes: asFunction(PendingPaymentsRoutes).singleton(),
		PlansRoutes: asFunction(PlansRoutes).singleton(),
		TermsRoutes: asFunction(TermsRoutes).singleton(),
		UsersRoutes: asFunction(UsersRoutes).singleton()
	})

	/*
	 * Services:
	 */
	.register({
		BlockchainService: asClass(BlockchainService).singleton(),
		JWTService: asClass(JWTService).singleton(),
		TreeService: asClass(TreeService).singleton(),
		TrmService: asClass(TrmService).singleton(),
		WebhookUrlService: asClass(WebhookUrlService).singleton()
	})

	/*
	 * Controllers:
	 */
	.register({
		AddressController: asClass(AddressController).singleton(),
		BonusController: asClass(BonusController).singleton(),
		ClientsController: asClass(ClientsController).singleton(),
		ConsignmentsController: asClass(ConsignmentsController).singleton(),
		CountriesController: asClass(CountriesController).singleton(),
		FortnightsController: asClass(FortnightsController).singleton(),
		PaymentsController: asClass(PaymentsController).singleton(),
		PendingPaymentsController: asClass(PendingPaymentsController).singleton(),
		PlansController: asClass(PlansController).singleton(),
		TermsController: asClass(TermsController).singleton(),
		TreesController: asClass(TreesController).singleton(),
		TrmController: asClass(TrmController).singleton(),
		UsersController: asClass(UsersController).singleton()
	})

	/*
	 * Middlewares:
	 */
	.register({
		AuthMiddleware: asClass(AuthMiddleware).singleton(),
		ErrorHandleMiddleware: asClass(ErrorHandleMiddleware).singleton()
	})

	/*
	 * Politics:
	 */
	.register({
		ClientsPolitic: asClass(ClientsPolitic).singleton()
	})

	/*
	 * Requests:
	 */
	.register({
		JoiValidator: asValue(JoiValidator)
	})
	.register({
		AddressRequest: asClass(AddressRequest).singleton(),
		ClientsRequest: asClass(ClientsRequest).singleton()
	})

	/*
	 * Repositories:
	 */
	.register({
		AddressRepository: asClass(AddressRepository).singleton(),
		AddressClientsRepository: asClass(AddressClientsRepository).singleton(),
		BonusRepository: asClass(BonusRepository).singleton(),
		ClientsRepository: asClass(ClientsRepository).singleton(),
		ConsignmentsRepository: asClass(ConsignmentsRepository).singleton(),
		CountriesRepository: asClass(CountriesRepository).singleton(),
		FortnightsRepository: asClass(FortnightsRepository).singleton(),
		PaymentsRepository: asClass(PaymentsRepository).singleton(),
		PendingPaymentsRepository: asClass(PendingPaymentsRepository).singleton(),
		PlansRepository: asClass(PlansRepository).singleton(),
		TermsRepository: asClass(TermsRepository).singleton(),
		TokenBlackListRepository: asClass(TokenBlackListRepository).singleton(),
		TreesRepository: asClass(TreesRepository).singleton(),
		TrmRepository: asClass(TrmRepository).singleton(),
		UsersRepository: asClass(UsersRepository).singleton(),
		WebhooksRepository: asClass(WebhooksRepository).singleton()
	})

	/*
	 * DTOS:
	 */
	.register({
		AddressDto: asClass(AddressDto).singleton(),
		AddressClientsDto: asClass(AddressClientsDto).singleton(),
		BonusDto: asClass(BonusDto).singleton(),
		ClientsDto: asClass(ClientsDto).singleton(),
		ConsignmentsDto: asClass(ConsignmentsDto).singleton(),
		CountriesDto: asClass(CountriesDto).singleton(),
		FortnightsDto: asClass(FortnightsDto).singleton(),
		PaymentsDto: asClass(PaymentsDto).singleton(),
		PendingPaymentsDto: asClass(PendingPaymentsDto).singleton(),
		PlansRepository: asClass(PlansRepository).singleton(),
		PlansDto: asClass(PlansDto).singleton(),
		TermsDto: asClass(TermsDto).singleton(),
		TreesDto: asClass(TreesDto).singleton(),
		TrmDto: asClass(TrmDto).singleton(),
		UsersDto: asClass(UsersDto).singleton(),
		WebhooksDto: asClass(WebhooksDto).singleton()
	})

module.exports = container
