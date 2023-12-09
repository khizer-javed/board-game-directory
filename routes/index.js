const getGames = () => {
	return global.db.Game.findAll({
		include: {
			model: global.db.GameSession,
			order: [['createdAt', 'DESC']],
			limit: 1
		}, order: [['createdAt', 'DESC']],
	})
}

module.exports = {
	getHomePage: async (req, res) => {
		// TODO: Make query for games list
		const games = await getGames()
		res.render('../views/games-list.ejs', { games });
	}
};
