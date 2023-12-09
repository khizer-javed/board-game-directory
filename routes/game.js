module.exports = {
	getAdd: (req, res) => {
		res.render('../views/add-game.ejs', {
			title: 'Board Games | Add game'
		});
	},
	getEdit: async (req, res) => {
		const gameId = req.params.id
		const game = await global.db.Game.findOne({ where: { id: gameId } })
		res.render('edit-game.ejs', {
			title: 'Board Games | Edit game',
			game
		});
	},
	postAdd: async (req, res) => {
		// TODO db.query to insert game
		const data = req.body
		try {
			await global.db.Game.create(data)
			res.status(200).send('New game added!');
		} catch (error) {
			res.status(400).send(error.message);
		}
	},
	postEdit: async (req, res) => {
		const id = req.params.id;
		const data = req.body
		// TODO db.query to update game
		try {
			await global.db.Game.update(data, { where: { id } })
			res.status(200).send('Game updated!');
		} catch (error) {
			res.status(400).send(error.message);
		}
	}
};
