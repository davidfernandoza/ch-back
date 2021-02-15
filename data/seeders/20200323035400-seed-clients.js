'use strict'

module.exports = {
	up: queryInterface => {
		return queryInterface.bulkInsert(
			'clients',
			[
				{
					countries_id: 5,
					plans_id: 1,
					sponsor_id: null,
					telegram_id: 7326478,
					trees_id: 1,
					full_name: 'Root',
					username: 'root',
					phone: '3107770717',
					state: 'plataforma',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					countries_id: 1,
					plans_id: 1,
					sponsor_id: 1,
					telegram_id: 1234562,
					trees_id: 2,
					full_name: 'Dario Gomez',
					username: 'dariogomez',
					phone: '3107770716',
					state: 'activo',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					countries_id: 2,
					plans_id: 1,
					sponsor_id: 1,
					telegram_id: 9876543,
					trees_id: 3,
					full_name: 'Paola Jara',
					username: 'paolajara',
					phone: '3107770721',
					state: 'mora',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					countries_id: 3,
					plans_id: 1,
					sponsor_id: 1,
					telegram_id: 567895,
					trees_id: 4,
					full_name: 'Pipe Bueno',
					username: 'pipebueno',
					phone: '3107770722',
					state: 'activo',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					countries_id: 1,
					plans_id: 1,
					sponsor_id: 1,
					telegram_id: 1209343,
					trees_id: 5,
					full_name: 'Jessi Uribe',
					username: 'jessiuribe',
					phone: '3107770723',
					state: 'activo',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					countries_id: 1,
					plans_id: 1,
					sponsor_id: 2,
					telegram_id: 2143651,
					trees_id: 6,
					full_name: 'Yeison Jimenez',
					username: 'jessiuribe',
					phone: '3107770724',
					state: 'activo',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					countries_id: 2,
					plans_id: 1,
					sponsor_id: 2,
					telegram_id: 9218763,
					trees_id: 7,
					full_name: 'Francy',
					username: 'francy',
					phone: '3107770725',
					state: 'mora',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					countries_id: 4,
					plans_id: 1,
					sponsor_id: 3,
					telegram_id: 1426378,
					trees_id: 8,
					full_name: 'Los Relicarios',
					username: 'losrelicarios',
					phone: '3107770726',
					state: 'activo',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					countries_id: 2,
					plans_id: 1,
					sponsor_id: 3,
					telegram_id: 398239,
					trees_id: 9,
					full_name: 'Charrito Negro',
					username: 'charritonegro',
					phone: '3107770727',
					state: 'plataforma',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					countries_id: 2,
					plans_id: 1,
					sponsor_id: 4,
					telegram_id: 398139,
					trees_id: null,
					full_name: 'Luisito Muños',
					username: 'luisitomuños',
					phone: '3107770728',
					state: 'inactivo',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('clients', null, {})
	}
}
