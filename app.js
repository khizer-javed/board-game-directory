// app.js
// Main entry point for application
const express = require('express');
const models = require('./models/index.js');
const path = require('path');
const app = express();
const { getHomePage } = require('./routes/index');
const game = require('./routes/game');
const game_session = require('./routes/game_session');
const { Sequelize } = require('sequelize');
const sequelizeConfig = require('./database/sequelize.config.js');
const knex = require('knex');
const env = process.env.NODE_ENV || 'development';
const config = sequelizeConfig[env]


async function main() {
  // TODO: application port should come from config file
  const port = process.env.PORT

  // TODO: database connection parameters should come from config file
  const sequelize = new Sequelize(config);
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  global.db = models

  app.set('port', port);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');

  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ extended: true, limit: '50mb' }));

  // If there are static files, make a public directory
  app.use(express.static(path.join(__dirname, 'public')));

  // Routes
  app.get('/', getHomePage);
  app.get('/add-game', game.getAdd);
  app.post('/add-game', game.postAdd);
  app.get('/edit-game/:id', game.getEdit);
  app.post('/edit-game/:id', game.postEdit);
  app.get('/add-game-session', game_session.getAdd);
  app.post('/add-game-session', game_session.postAdd);
  app.listen(port);
  console.log('running on port', port);
}
main()