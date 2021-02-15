'use strict'
const { join } = require('path')

module.exports = {
	AddressController: require(join(__dirname, './address.controller')),
	BonusController: require(join(__dirname, './bonus.controller')),
	ClientsController: require(join(__dirname, './clients.controller')),
	ConsignmentsController: require(join(__dirname, './consignments.controller')),
	CountriesController: require(join(__dirname, './countries.controller')),
	FortnightsController: require(join(__dirname, './fortnights.controller')),
	PaymentsController: require(join(__dirname, './payments.controller')),

	PendingPaymentsController: require(join(
		__dirname,
		'./pending-payments.controller'
	)),

	PlansController: require(join(__dirname, './plans.controller')),
	TermsController: require(join(__dirname, './terms.controller')),
	TreesController: require(join(__dirname, './trees.controller')),
	TrmController: require(join(__dirname, './trm.controller')),
	UsersController: require(join(__dirname, './users.controller'))
}
