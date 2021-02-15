'use strict'

module.exports = {
	NODE_ENV: process.env.NODE_ENV,
	PORT: process.env.PORT,
	CSRF_TOKEN: process.env.CSRF_TOKEN,
	BRIDGE_TOKEN: process.env.BRIDGE_TOKEN,

	BASE_URL: process.env.BASE_URL,
	BASE_API: process.env.BASE_API,

	ENCRYPTION_KEY_TOKEN: process.env.ENCRYPTION_KEY_TOKEN,
	ENCRYPTION_SALT: process.env.ENCRYPTION_SALT,

	HANDLER_ERROR_TOKEN: process.env.HANDLER_ERROR_TOKEN,
	HANDLER_ERROR_API: process.env.HANDLER_ERROR_API,

	BLOCKCHAIN_API: process.env.BLOCKCHAIN_API_DEV,

	COINBASE_API: process.env.COINBASE_API,
	COINBASE_KEY: process.env.COINBASE_KEY,
	COINBASE_SECRET: process.env.COINBASE_SECRET,

	BLOCKCYPHER_TOKEN: process.env.BLOCKCYPHER_TOKEN,
	BLOCKCYPHER_REQUEST: process.env.BLOCKCYPHER_REQUEST_DEV,
	BLOCKCYPHER_EVENT: process.env.BLOCKCYPHER_EVENT,
	BLOCKCYPHER_API_GET: process.env.BLOCKCYPHER_API_GET,
	BLOCKCYPHER_COIN: process.env.BLOCKCYPHER_COIN,

	DB: {
		username: process.env.DB_USER_DEV,
		password: process.env.DB_PASS_DEV,
		database: process.env.DB_DATABASE_DEV,
		host: process.env.DB_HOST_DEV,
		dialect: process.env.DB_DIAL_DEV
	},
	ROL: {
		ATTRIBUTE: process.env.ROL_ATTRIBUTE,
		CLIENT: process.env.ROL_CLIENT,
		BASIC: process.env.ROL_BASIC,
		ADMIN: process.env.ROL_ADMIN,
		ROOT: process.env.ROL_ROOT
	}
}
