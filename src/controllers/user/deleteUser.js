module.exports = function makeDeleteUser({ removeUser }) {
  return async function deleteUser(httpRequest) {
    try {
      const headers = {
        'Content-type': 'application/json'
      };

      const { userId } = httpRequest.params;
      const deletedUser = await removeUser({ userId });

      return {
        headers,
        statusCode: 200,
        body: deletedUser
      };
    } catch (error) {
      console.log(error);
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
