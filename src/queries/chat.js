const History = require('../models/history');

const findHistory = async (sessionId) => {
  const history = await History.findAll({
    where: { sessionId: sessionId },
  });
  return history;
};

const saveChat = async (sessionId, content, role) => {
  const addedHistory = await History.create({
    sessionId,
    content,
    role,
  });
  return addedHistory.dataValues;
};

module.exports = { findHistory, saveChat };
