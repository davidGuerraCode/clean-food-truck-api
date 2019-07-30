module.exports = function makePatchUser({ editUser }) {
  return async function patchUser(httpRequest) {
    try {
      const headers = {
        'Content-Type': 'application/json'
      };
      const { userId } = httpRequest.params;
      const { ...changes } = httpRequest.body;
      const updatedUser = await editUser({ userId, ...changes });

      return {
        headers,
        statusCode: 200,
        body: updatedUser
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
