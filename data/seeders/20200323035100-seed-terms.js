'use strict'

module.exports = {
	up: queryInterface => {
		return queryInterface.bulkInsert(
			'terms',
			[
				{
					type: 'general',
					description:
						'1️⃣ Is simply dummy text of the printing and typesetting industry. \n\n2️⃣ Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and \n\n3️⃣ Scrambled it to make a type specimen book. It has survived not only five centuries, \n\n4️⃣ But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in \n\n5️⃣ The 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus \n\n6️⃣ PageMaker including versions of Lorem Ipsum.',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					type: 'plan',
					description:
						'1️⃣ Contrary to popular belief, Lorem Ipsum is not simply random text. \n\n2️⃣It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin \n\n3️⃣ Professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical \n\n4️⃣ Literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 \n\n5️⃣ BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					type: 'plan',
					description:
						'1)There are many variations of passages of Lorem Ipsum available, \n\n2️⃣ But the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you \n\n3️⃣ Need to be sure there isn t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first \n\n4️⃣  Latin words, combined with a handful of model \n\n5️⃣ True generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence \n\n6️⃣ Structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, \n7)injected humour, or non-characteristic words etc.',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					type: 'bono',
					description:
						'1)In id sollicitudin mauris. Aliquam cursus mi vel est sodales dictum. Aenean consectetur libero efficitur enim convallis, in \n\n2️⃣ Vulputate nisl laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam fringilla turpis et ante vehicula cursus. Donec convallis quis tortor eget \n\n3️⃣ Celerisque. Cras dignissim, odio vel pulvinar euismod, tortor tellus placerat justo, varius faucibus neque purus in lacus. Aliquam elementum urna \n\n4️⃣ Libero, vestibulum laoreet libero efficitur ac. Vestibulum diam leo, bibendum rhoncus porttitor eu, ornare sit amet orci. Suspendisse vehicula elementum felis a \n\n5️⃣ Sollicitudin. Proin sit amet tortor tristique, iaculis ante sit amet, pharetra eros.',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('terms', null, {})
	}
}
