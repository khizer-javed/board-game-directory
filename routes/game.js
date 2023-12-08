module.exports = {
	getAdd: (req, res) => {
		res.render('../views/add-game.ejs', {
			title: 'Board Games | Add game'
		});
	},
	getEdit: (req, res) => {
		res.render('edit-game.ejs', {
			title: 'Board Games | Edit game'
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
		// If all went well, go back to main screen
	},
	postEdit: (req, res) => {
		let id = req.params.id;

		// TODO db.query to update game

		res.redirect('/');
	}
};
