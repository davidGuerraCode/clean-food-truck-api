const Joi = require('@hapi/joi');

const userSchema = Joi.object().keys({
  firstname: Joi.string()
    .min(2)
    .max(30)
    .required(),
  lastname: Joi.string()
    .min(2)
    .max(30),
  userType: Joi.number()
    .integer()
    .min(1),
  birthday: Joi.number()
    .integer()
    .min(1900)
    .max(200),
  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .required(),
  password: Joi.string().strip(),
  phoneNumber: Joi.string()
    .min(6)
    .max(20),
  createOn: Joi.date().timestamp()
});

module.exports = userSchema;
