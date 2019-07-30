const bcrypt = require('bcrypt');
const userSchemaValidation = require('./userSchemaValidation');
const Joi = require('@hapi/joi');
const buildMakeUser = require('./user');

const makeUser = buildMakeUser({ crypt, validUser });

module.exports = makeUser;

async function crypt(password) {
  try {
    const saltRounds = 10;
    const hash = bcrypt.hash(password, saltRounds);

    return hash;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function validUser(userInfo = {}) {
  try {
    return Joi.validate(userInfo, userSchemaValidation);
  } catch (error) {
    throw new Error(error.details.message);
  }
}
