require('dotenv').config();
const env = process.env.NODE_ENV || 'development';

module.exports = {
  [env]: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    dialect: process.env.MYSQL_DIALECT,
    client: process.env.MYSQL_CLIENT,
    port: process.env.MYSQL_PORT
  },
};