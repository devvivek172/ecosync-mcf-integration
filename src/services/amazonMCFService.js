const axios = require('axios');
const mcfConfig = require('../config/mcfConfig');

const createOrder = async (orderData) => {
  const url = `${mcfConfig.baseUrl}/Orders/2013-09-01`;
  const headers = {
    'x-amz-access-token': mcfConfig.accessKeyId,
    'Content-Type': 'application/json',
  };

  try {
    const response = await axios.post(url, orderData, { headers });
    return response.data;
  } catch (error) {
    throw new Error(`Amazon MCF Order Error: ${error.response?.data || error.message}`);
  }
};

module.exports = { createOrder };
