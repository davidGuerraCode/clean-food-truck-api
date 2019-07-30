module.exports = function makeGetUser({ findUser }) {
  return async function getUser(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    };

    try {
      const { userId } = httpRequest.params;
      const user = await findUser(userId);

      return {
        headers,
        statusCode: 200,
        body: user
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
