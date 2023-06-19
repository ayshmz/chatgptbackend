const Sequelize = require('sequelize');

const schema =
  process.env.NODE_ENV === 'production'
    ? process.env.POSTGRES_DATABASE
    : process.env.DB_SCHEMA;
const user =
  process.env.NODE_ENV === 'production'
    ? process.env.POSTGRES_USER
    : process.env.DB_USER;
const password =
  process.env.NODE_ENV === 'production'
    ? process.env.POSTGRES_PASSWORD
    : process.env.DB_PASSWORD;
const host =
  process.env.NODE_ENV === 'production'
    ? process.env.POSTGRES_HOST
    : process.env.DB_HOST;

const sequelize = new Sequelize(
  schema || 'postgres',
  user || 'postgres',
  password || '',
  {
    host: host || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
  }
);

module.exports = sequelize;
