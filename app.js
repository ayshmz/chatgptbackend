const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');
const sequelize = require('./src/utils/database');
const History = require('./src/models/history');

require('dotenv').config();

sequelize.sync();

const port = process.env.DEV_PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/chat', routes.completionGPT);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/', (req, res) => {
  console.log(
    'Hello! Welcome to the backend of ChestnutBot. To see the front end, go to https://ayshmz.github.io'
  );
  res.send(
    'Hello! Welcome to the backend of ChestnutBot. To see the front end, go to <ul><a href="https://ayshmz.github.io">https://ayshmz.github.io</a></ul>'
  );
});
module.exports = app;
