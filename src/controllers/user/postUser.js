module.exports = function makePostUser({ addUser }) {
  return async function postUser(httpRequest) {
    try {
      const { ...userData } = httpRequest.body;
      const user = await addUser({ ...userData });
      const headers = {
        'Content-Type': 'application/json'
      };

      return {
        headers,
        statusCode: 201,
        body: { user }
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
