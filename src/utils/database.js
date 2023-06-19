const Sequelize = require('sequelize');

require('dotenv').config();

console.log('....', process.env.NODE_ENV, process.env.PGHOST);

const schema = process.env.PGDATABASE;
const user = process.env.PGUSER;
const password = process.env.PGPASSWORD;
const host = process.env.PGHOST;

const sequelize = new Sequelize(
  schema || 'postgres',
  user || 'postgres',
  password || '',
  {
    host: host || 'localhost',
    port: process.env.PGPORT || 5432,
    dialect: 'postgres',
  }
);

module.exports = sequelize;
