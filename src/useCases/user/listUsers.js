module.exports = function makeListUsers({ userDb }) {
  return async function listUsers() {
    const users = await userDb.findAll({ notDeleted: true });

    return users;
  };
};
