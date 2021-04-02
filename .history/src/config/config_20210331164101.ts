import * as dotenv from 'dotenv';

dotenv.config();

type IConfig = {
  username: string,
  password: string,
  database: string,
  [key: string]: any,
};

interface IConfigGroup {
  development: IConfig;
  test: IConfig;
  production: IConfig;
}

const config: IConfigGroup = {
  development: {
    username: process.env.DB_USERNAME!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DATABASE!,
    host: process.env.HOST!,
    dialect: 'mysql',
  },
  test: {
    username: process.env.DB_USERNAME!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DATABASE!,
    host: process.env.HOST!,
    dialect: 'mysql',
  },
  production: {
    username: process.env.DB_USERNAME!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DATABASE!,
    host: process.env.HOST!,
    dialect: 'mysql',
  },
};

export default config;
