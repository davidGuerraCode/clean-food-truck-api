/**
 * userService => Objeto que contiene todos los casos de uso.
 */

const makeAddUser = require('./addUser');
const makeListUsers = require('./listUsers');
const makeFindUser = require('./findUser');
const makeEditUser = require('./editUser');
const makeRemoveUser = require('./removeUser');
const userDb = require('../../dataAccess/user');

const addUser = makeAddUser({ userDb });
const listUsers = makeListUsers({ userDb });
const findUser = makeFindUser({ userDb });
const editUser = makeEditUser({ userDb });
const removeUser = makeRemoveUser({ userDb });

const userService = Object.freeze({
  addUser,
  listUsers,
  findUser,
  editUser,
  removeUser
});

module.exports = userService;
module.exports = { addUser, listUsers, findUser, editUser, removeUser };
