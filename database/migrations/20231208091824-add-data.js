'use strict';

const { DEFAULT_GAMES_DATA, DEFAULT_GAME_SESSION_DATA } = require('../../constants');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const Game = queryInterface.sequelize.define('games', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      thumbnail: {
        type: Sequelize.TEXT,
      },
      max_players: {
        type: Sequelize.INTEGER,
      },
      min_players: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'created_at'
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at'
      },
      deletedAt: {
        type: Sequelize.DATE,
        field: 'deleted_at'
      },
    });

    const GameSession = queryInterface.sequelize.define('game_sessions', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fk_game_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      start_time: {
        type: Sequelize.DATE,
      },
      end_time: {
        type: Sequelize.DATE,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'created_at'
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at'
      },
      deletedAt: {
        type: Sequelize.DATE,
        field: 'deleted_at'
      },
    });

    await Game.bulkCreate(DEFAULT_GAMES_DATA)
    await GameSession.bulkCreate(DEFAULT_GAME_SESSION_DATA)

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query('TRUNCATE TABLE game_sessions;');
    await queryInterface.sequelize.query('TRUNCATE TABLE games;');
  }
};
