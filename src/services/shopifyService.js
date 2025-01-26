const axios = require('axios');
const shopifyConfig = require('../config/shopifyConfig');

const syncInventory = async () => {
  const url = `${shopifyConfig.storeUrl}/admin/api/2023-01/inventory_levels.json`;
  const headers = {
    'X-Shopify-Access-Token': shopifyConfig.accessToken,
  };

  try {
    const response = await axios.get(url, { headers });
    return response.data.inventory_levels;
  } catch (error) {
    throw new Error(`Shopify Inventory Sync Error: ${error.response?.data || error.message}`);
  }
};

module.exports = { syncInventory };
