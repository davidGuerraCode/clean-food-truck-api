const makeUser = require('../../services/user');

module.exports = function makeRemoveUser({ userDb }) {
  return async function removeUser({ userId }) {
    const userExist = await userDb.findById({ userId });

    if (userExist.length === 0) {
      throw new Error('There is nothing to delete');
    }

    console.log('[]', userExist[0]);
    const toDelete = await makeUser(userExist[0]);

    toDelete.markDeleted();

    const userToDeletePayload = {
      firstname: toDelete.getFirstname(),
      lastname: toDelete.getLastname(),
      userType: toDelete.getUserType(),
      email: toDelete.getEmail(),
      password: toDelete.getPassword(),
      phoneNumber: toDelete.getPhoneNumber(),
      createOn: toDelete.getCreateOn(),
      deleted: toDelete.isDeleted()
    };

    await userDb.remove({ userId, ...userToDeletePayload });

    return {
      softDeleted: true,
      message: 'User deleted!'
    };
  };
};
