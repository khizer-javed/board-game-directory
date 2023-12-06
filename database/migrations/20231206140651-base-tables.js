require('dotenv').config();
const knex = require('knex');
const fs = require('fs');
const _ = require('lodash');

const dbConfig = {};

dbConfig.connection = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  dialect: process.env.MYSQL_DIALECT,
};

const dbConn = knex(dbConfig);

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      console.log('');
      console.log('------------------- BASE TABLES');
      console.log('');
      const sql = fs
        .readFileSync(__dirname + '/../schema.sql')
        .toString();
      return dbConn.raw(sql);
    } catch (error) {
      console.log('error:: ', error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    const tables = await dbConn.raw(`
      SELECT * FROM pg_catalog.pg_tables 
      where tableowner = \'postgres\' and schemaname = \'public\';
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
