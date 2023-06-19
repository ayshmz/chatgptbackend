const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const History = sequelize.define('history', {
  sessionId: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  role: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = History;
