require('dotenv').config();

console.log(process.env.CHATGPT_TOKEN);
const headers = {
  Authorization: `Bearer ${process.env.CHATGPT_TOKEN}`,
  'Content-Type': 'application/json',
};

const HTTP_METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

module.exports = {
  headers,
  HTTP_METHOD,
};
