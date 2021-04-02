const dotenv = require('dotenv')
dotenv.config()

module.exports =
{
  "development": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": "softsquared",
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": "softsquared",
    "host": "localhost",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": "softsquared",
    "host": "localhost",
    "dialect": "mysql"
  }
}
