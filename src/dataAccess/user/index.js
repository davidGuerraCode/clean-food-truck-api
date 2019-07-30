const makeUserDb = require('./userDb');
const knex = require('knex');

const makeDb = async () => {
  return knex({
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: '',
      database: 'foodTruck'
    }
  });
};

module.exports = makeDb;

const userDb = makeUserDb({ makeDb });
module.exports = userDb;
