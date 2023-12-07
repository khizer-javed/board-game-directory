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
			{ id: 4, name: 'Game 4' },
			{ id: 5, name: 'Game 5' },
			{ id: 6, name: 'Game 6' },
			{ id: 7, name: 'Game 7' },
			{ id: 8, name: 'Game 8' },
			{ id: 9, name: 'Game 9' },
			{ id: 10, name: 'Game 10' },
			{ id: 11, name: 'Game 11' },
			{ id: 12, name: 'Game 12' },
			{ id: 13, name: 'Game 13' },
			{ id: 14, name: 'Game 14' },
			{ id: 15, name: 'Game 15' },
		]

		res.render('../views/games-list/index.ejs', {
			title: 'Board Games | View Games',
			games
			// players: result
		});
	}
};
