'use strict'
const { join } = require('path')

module.exports = {
	AddressDomain: require(join(__dirname, './address.domain')),
	BonusDomain: require(join(__dirname, './bonus.domain')),
	ClientsDomain: require(join(__dirname, './clients.domain')),
	ConsignmentsDomain: require(join(__dirname, './consignments.domain')),
	CountriesDomain: require(join(__dirname, './countries.domain')),
	FortnightsDomain: require(join(__dirname, './fortnights.domain')),
	PaymentsDomain: require(join(__dirname, './payments.domain')),
	PendingPaymentsDomain: require(join(__dirname, './pending-payments.domain')),
	PlansDomain: require(join(__dirname, './plans.domain')),
	TermsDomain: require(join(__dirname, './terms.domain')),
	TokenBlackListDomain: require(join(__dirname, './token-black-list.domain')),
	UsersDomain: require(join(__dirname, './users.domain'))
}
