/**
 * User entity, sus dependencias son obtenidas a través de la inyección de dependencias.
 * Nos devuelve una nueva instancia de un usuario.
 */

module.exports = function buildMakeUser({ crypt, validUser }) {
  return async function makeUser({
    firstname,
    lastname,
    userType = 2,
    email,
    password,
    phoneNumber,
    createOn = new Date(),
    deleted = false
  } = {}) {
    try {
      await checkUserValidity();

      const hash = await makeHash();

      return Object.freeze({
        getFirstname: () => firstname,
        getLastname: () => lastname,
        getUserType: () => userType,
        getEmail: () => email,
        getPassword: () => hash,
        getPhoneNumber: () => phoneNumber,
        getCreateOn: () => createOn,
        isDeleted: () => deleted,
        markDeleted: () => {
          deleted = true;
        }
      });
    } catch (error) {
      throw new Error(error.message);
    }

    function makeHash() {
      return crypt(password);
    }

    function checkUserValidity() {
      const userData = {
        firstname,
        lastname,
        userType,
        email,
        password,
        phoneNumber,
        createOn
      };
      return validUser(userData);
    }
  };
};
