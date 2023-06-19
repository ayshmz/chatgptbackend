const chatDB = require('../utils/database');

const findHistory = async (sessionId) => {
  const history = await chatDB.History.findAll({
    where: { sessionId: sessionId },
  });
  return history;
};

const saveChat = async (sessionId, content, role) => {
  const addedHistory = await chatDB.History.create({
    sessionId,
    content,
    role,
  });
  return addedHistory.dataValues;
};

module.exports = { findHistory, saveChat };
