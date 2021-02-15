'use strict'
const { join } = require('path')

module.exports = {
	DoneString: require(join(__dirname, './done.string')),
	ErrorString: require(join(__dirname, './error.string'))
}
