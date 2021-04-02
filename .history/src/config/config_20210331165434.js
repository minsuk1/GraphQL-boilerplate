// import * as dotenv from 'dotenv';

const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    username: 'root',
    password: '1234',
    database: 'bb',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: '1234',
    database: 'bb',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: '1234',
    database: 'bb',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};


