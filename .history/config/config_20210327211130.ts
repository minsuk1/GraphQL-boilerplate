import * as dotenv from 'dotenv';

dotenv.config()

export default
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
