'use strict'
const { join } = require('path')
const Domain = require(join(__dirname, './domain'))

class TokenBlackListDomain extends Domain {
	constructor({ TokenBlackListRepository, TokenBlackListDto }) {
		super(TokenBlackListRepository, TokenBlackListDto)
	}
}

module.exports = TokenBlackListDomain
