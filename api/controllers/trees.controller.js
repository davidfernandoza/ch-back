'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class TreesController extends Controller {
	constructor({ TreesRepository, TreesDto }) {
		super(TreesRepository, TreesDto)
	}
}

module.exports = TreesController
