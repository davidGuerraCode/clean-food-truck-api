module.exports = function makeFindUser({ userDb }) {
  return async function findUser(userId) {
    const user = await userDb.findById({ userId, notDeleted: true });

    return user;
  };
};
