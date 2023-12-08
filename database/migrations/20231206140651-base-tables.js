require('dotenv').config();
const knex = require('knex');
const fs = require('fs');
const _ = require('lodash');
const sequelizeConfig = require('../sequelize.config.js');
const env = process.env.NODE_ENV || 'development';
const config = sequelizeConfig[env]

const dbConfig = {};
dbConfig.client = process.env.MYSQL_CLIENT;
if (process.env.MYSQL_URL) {
  dbConfig.connection = process.env.MYSQL_URL;
} else {
  dbConfig.connection = config;
}
const dbConn = knex(dbConfig);

module.exports = {
  up: async (queryInterface, Sequelize) => {
    console.log('');
    console.log('------------------- BASE TABLES');
    console.log('');
    let sql = fs
      .readFileSync(__dirname + '/../schema.sql')
      .toString();

    const queries = sql.split('--SPLIT_SCRIPT--')
    for (const query of queries) {
      try {
        await dbConn.raw(query)
      } catch (error) {
        console.log('error', error);
      }
    }

  },

  down: async (queryInterface, Sequelize) => {
    const tables = await dbConn.raw(`
      SELECT * FROM mysql2_catalog.mysql2_tables 
      where tableowner = \'mariadb\' and schemaname = \'public\';
    `);
    const SequelizeMetaTableName = 'SequelizeMeta';
    const tableDropPromises = _.map(tables.rows, (table) => {
      if (table.tablename === SequelizeMetaTableName) {
        return Promise.resolve(null);
      }
      return dbConn.schema.dropTableIfExists(table.tablename);
    });
    return Promise.all(tableDropPromises);
  },
};
