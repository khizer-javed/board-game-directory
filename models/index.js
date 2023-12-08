
const { Game } = require('./games');
const { GameSession } = require('./game_sessions');


Game.hasMany(GameSession, { foreignKey: 'fk_game_id' });
Game.hasOne(GameSession, { as: 'latest_session', foreignKey: 'fk_game_id' });
GameSession.belongsTo(Game, { foreignKey: 'fk_game_id' });


module.exports = { Game, GameSession }