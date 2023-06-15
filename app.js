const express = require('express');
// const routes = require('./routes/chatgpt');

const app = express();
const port = 6060;
console.log('request sent');

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/api/projects', (req, res) => {
  res.json([{ name: 'iPhone', price: 800 }]);
});

app.get('/api/chat', (req, res) => {
  const { prompt } = req.body;
  // do something with prompt
  const data = 'Reply';
  res.status(200).send(data);
});
