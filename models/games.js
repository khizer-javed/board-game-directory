const { Sequelize, DataTypes } = require('sequelize');
const sequelizeConfig = require('../database/sequelize.config.js');
const env = process.env.NODE_ENV || 'development';
const config = sequelizeConfig[env]

const sequelize = new Sequelize(config);

const Game = sequelize.define('games', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    thumbnail: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    max_players: {
        type: DataTypes.INTEGER,
    },
    min_players: {
        type: DataTypes.INTEGER,
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
module.exports = { Game }