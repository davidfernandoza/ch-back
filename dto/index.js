'use strict'
const { join } = require('path')

module.exports = {
	AddressDto: require(join(__dirname, './address.dto')),
	AddressClientsDto: require(join(__dirname, './address-clients.dto')),
	BonusDto: require(join(__dirname, './bonus.dto')),
	ClientsDto: require(join(__dirname, './clients.dto')),
	ConsignmentsDto: require(join(__dirname, './consignments.dto')),
	CountriesDto: require(join(__dirname, './countries.dto')),
	FortnightsDto: require(join(__dirname, './fortnights.dto')),
	PaymentsDto: require(join(__dirname, './payments.dto')),
	PendingPaymentsDto: require(join(__dirname, './pending-payments.dto')),
	PlansDto: require(join(__dirname, './plans.dto')),
	TermsDto: require(join(__dirname, './terms.dto')),
	TreesDto: require(join(__dirname, './trees.dto')),
	TrmDto: require(join(__dirname, './trm.dto')),
	TokenBlackListDto: require('./token-black-list.dto'),
	UsersDto: require(join(__dirname, './users.dto')),
	WebhooksDto: require(join(__dirname, './webhooks.dto'))
}
