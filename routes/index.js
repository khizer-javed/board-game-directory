const getGames = () => {
	return global.db.Game.findAll({
		include: {
			model: global.db.GameSession,
			as: 'latest_session',
			required: false,
			order: [['createdAt', 'DESC']], // Order by createdAt in descending order
		}, order: [['createdAt', 'DESC']],
	})
}

module.exports = {
	getHomePage: async (req, res) => {
		// TODO: Make query for games list
		const games = await getGames()
		res.render('../views/games-list/index.ejs', { games });
	}
};
