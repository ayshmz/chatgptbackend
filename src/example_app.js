const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

require('dotenv').config();
const port = process.env.DEV_PORT;
const routes = require('./routes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/chat', routes.completionGPT);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/', () => {
  console.log(
    'Hello! Welcome to the backend of ChestnutBot. To see the front end, go to https://ayshmz.github.io'
  );
});

module.exports = app;
