'use strict'
const bcrypt = require('bcrypt')

module.exports = {
	up: async queryInterface => {
		const salt = await bcrypt.genSalt(10)
		const hash = await bcrypt.hash('123456789', salt)
		return queryInterface.bulkInsert(
			'users',
			[
				{
					username: 'super_root',
					password: hash,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					username: 'root',
					password: hash,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					username: 'admin',
					password: hash,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					username: 'basic',
					password: hash,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('users', null, {})
	}
}
