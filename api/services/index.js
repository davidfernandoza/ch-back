'use strict'
const { join } = require('path')

module.exports = {
	BlockchainService: require(join(__dirname, './blockchain.service')),
	JWTService: require(join(__dirname, './jwt.service')),
	TreeService: require(join(__dirname, './tree.service')),
	TrmService: require(join(__dirname, './trm.service')),
	WebhookUrlService: require(join(__dirname, './webhook-url.service'))
}
