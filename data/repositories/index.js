'use strict'
const { join } = require('path')
module.exports = {
	AddressRepository: require(join(__dirname, './address.repository')),
	AddressClientsRepository: require(join(
		__dirname,
		'./address-clients.repository'
	)),
	BonusRepository: require(join(__dirname, './bonus.repository')),
	ClientsRepository: require(join(__dirname, './clients.repository')),
	ConsignmentsRepository: require(join(__dirname, './consignments.repository')),
	CountriesRepository: require(join(__dirname, './countries.repository')),
	FortnightsRepository: require(join(__dirname, './fortnights.repository')),
	PaymentsRepository: require(join(__dirname, './payments.repository')),

	PendingPaymentsRepository: require(join(
		__dirname,
		'./pending-payments.repository'
	)),

	PlansRepository: require(join(__dirname, './plans.repository')),
	TermsRepository: require(join(__dirname, './terms.repository')),
	TreesRepository: require(join(__dirname, './trees.repository')),
	TokenBlackListRepository: require(join(
		__dirname,
		'./token-black-list.repository'
	)),
	TrmRepository: require(join(__dirname, './trm.repository')),
	UsersRepository: require(join(__dirname, './users.repository')),
	WebhooksRepository: require(join(__dirname, './webhooks.repository'))
}

