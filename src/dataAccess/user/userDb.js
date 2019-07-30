/**
 * makeUserDb => Es un objeto que expone interacciones con la BD.
 */

module.exports = function makeUserDb({ makeDb }) {
  return Object.freeze({
    findAll,
    findByEmail,
    findById,
    insert,
    remove,
    update
  });

  async function findAll({ notDeleted = true } = {}) {
    const db = await makeDb();
    const query = notDeleted ? { deleted: false } : {};
    const result = await db('user')
      .select('*')
      .where(query);

    return result;
  }

  async function findByEmail({ email, notDeleted = true } = {}) {
    const db = await makeDb();
    const query = notDeleted ? { deleted: false, email } : {};
    const result = await db('user')
      .select('email')
      .where(query);

    return result;
  }

  async function findById({ userId, notDeleted = true } = {}) {
    const db = await makeDb();
    const query = notDeleted ? { deleted: false, userId } : {};
    const result = await db('user')
      .select('*')
      .where(query);

    return result;
  }

  async function insert({ ...user }) {
    const db = await makeDb();
    const result = await db('user')
      .returning('*')
      .insert({ ...user });

    return result;
  }
  async function remove({ userId, notDeleted = true, ...userToDelete } = {}) {
    const db = await makeDb();
    const query = notDeleted ? { deleted: false, userId } : {};
    const result = await db('user')
      .returning('*')
      .where(query)
      .update({ ...userToDelete });

    return result;
  }

  async function update({ userId, notDeleted = true, ...changes } = {}) {
    const db = await makeDb();
    const query = notDeleted ? { deleted: false, userId } : {};
    const result = await db('user')
      .returning('*')
      .where(query)
      .update({ ...changes });

    return result;
  }
};
