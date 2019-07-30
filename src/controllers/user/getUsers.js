module.exports = function makeGetUsers({ listUsers }) {
  return async function getUsers() {
    try {
      const headers = {
        'Content-Type': 'application/json'
      };
      const users = await listUsers();

      return {
        headers,
        statusCode: 200,
        body: users
      };
    } catch (error) {
      console.log(error.message);
      return {
        headers,
        statusCode: 400,
        body: {
          error: error.message
        }
      };
    }
  };
};
