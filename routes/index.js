module.exports = {
	getHomePage: (req, res) => {
		// TODO: Make query for games list
		// let query = "SELECT 1 AS t";

		// db.query(query, (err, result) => {
		// 	if (err) {
		// 		res.redirect('/');
		// 	}
		// 	res.render('/views/games/index.ejs', {
		// 		title: 'Board Games | View Games',
		// 		players: result
		// 	});
		// });
		const games = [
			{ id: 1, name: 'Game 1' },
			{ id: 2, name: 'Game 2' },
			{ id: 3, name: 'Game 3' },
		];
		res.render('../views/games/index.ejs', {
			title: 'Board Games | View Games',
			games
			// players: result
		});
	}
};
