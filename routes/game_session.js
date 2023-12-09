module.exports = {
	getAdd: (req, res) => {
		res.render('add-game.ejs', {
			title: 'Board Games | Add game'
		});
	},
	postAdd: async (req, res) => {
		// TODO db.query to insert game-playing session
		const data = { fk_game_id: req.body.id, createdAt: new Date() }
		try {
			await global.db.GameSession.create(data)
			res.status(200).send('New game session added!');
		} catch (error) {
			res.status(400).send(error.message);
		}
	}
};
