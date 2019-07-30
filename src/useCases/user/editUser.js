const makeUser = require('../../services/user');

module.exports = function makeEditUser({ userDb }) {
  return async function editUser({ userId, ...changes } = {}) {
    const userExist = await userDb.findById({ userId });

    if (userExist.length === 0) {
      throw new Error('The user to update does not exist!');
    }

    const user = await makeUser({ ...userExist[0], ...changes });
    const toUpdate = {
      firstname: user.getFirstname(),
      lastname: user.getLastname(),
      userType: user.getUserType(),
      email: user.getEmail(),
      password: user.getPassword(),
      phoneNumber: user.getPhoneNumber(),
      createOn: user.getCreateOn()
    };
    const updatedUser = await userDb.update({ userId, ...toUpdate });

    return updatedUser;
  };
};
