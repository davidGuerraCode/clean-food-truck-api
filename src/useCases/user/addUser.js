/**
 * useDb => Es un adaptador.
 */

const makeUser = require('../../services/user');

module.exports = function makeAddUser({ userDb }) {
  return async function addUser(userData) {
    const user = await makeUser(userData);
    const exist = await userDb.findByEmail({ email: user.getEmail() });

    if (exist.length > 0) {
      throw new Error(`The email address already exist!`);
    }

    return userDb.insert({
      firstname: user.getFirstname(),
      lastname: user.getLastname(),
      userType: user.getUserType(),
      email: user.getEmail(),
      password: user.getPassword(),
      createOn: user.getCreateOn()
    });
  };
};
