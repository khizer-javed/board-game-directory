require('dotenv').config();
const env = process.env.NODE_ENV || 'development';

console.log('process.env.NODE_ENV', process.env.NODE_ENV);
module.exports = {
  [env]: {
    db: {
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      host: process.env.MYSQL_HOST,
      dialect: process.env.MYSQL_DIALECT,
    },
    port: process.env.PORT
  },
};