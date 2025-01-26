const axios = require('axios');

const makeApiCall = async (method, url, data, headers) => {
  try {
    const response = await axios({ method, url, data, headers });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || error.message);
  }
};

module.exports = { makeApiCall };
