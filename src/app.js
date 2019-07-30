const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const makeCallback = require('./expressCallback');
const {
  postUser,
  getUsers,
  getUser,
  patchUser,
  deleteUser
} = require('./controllers/user');

dotenv.config();

const apiRoot = process.env.API_ROOT;
const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

app.post(`${apiRoot}/user`, makeCallback(postUser));
app.get(`${apiRoot}/user`, makeCallback(getUsers));
app.get(`${apiRoot}/user/:userId`, makeCallback(getUser));
app.patch(`${apiRoot}/user/:userId`, makeCallback(patchUser));
app.delete(`${apiRoot}/user/:userId`, makeCallback(deleteUser));

module.exports = app;
