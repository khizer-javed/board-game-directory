const { Sequelize, DataTypes } = require('sequelize');
const sequelizeConfig = require('../database/sequelize.config.js');
const env = process.env.NODE_ENV || 'development';
const config = sequelizeConfig[env]

const sequelize = new Sequelize(config);

const GameSession = sequelize.define('game_sessions', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    fk_game_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    start_time: {
        type: DataTypes.DATE,
    },
    end_time: {
        type: DataTypes.DATE,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_at'
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
    },
    deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at'
    },
});
module.exports = { GameSession }