const {
  addUser,
  listUsers,
  findUser,
  editUser,
  removeUser
} = require('../../useCases/user');
const makePostUser = require('./postUser');
const makeGetUsers = require('./getUsers');
const makeGetUser = require('./getUser');
const makePatchUser = require('./patchUser');
const makeDeleteUser = require('./deleteUser');

const postUser = makePostUser({ addUser });
const getUsers = makeGetUsers({ listUsers });
const getUser = makeGetUser({ findUser });
const patchUser = makePatchUser({ editUser });
const deleteUser = makeDeleteUser({ removeUser });

const userController = Object.freeze({
  postUser,
  getUsers,
  getUser,
  patchUser,
  deleteUser
});

module.exports = userController;
module.exports = { postUser, getUsers, getUser, patchUser, deleteUser };
