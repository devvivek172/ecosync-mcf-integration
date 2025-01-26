const { syncInventory } = require('../services/shopifyService');

const syncInventoryController = async (req, res) => {
  try {
    const inventory = await syncInventory();
    res.status(200).json(inventory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { syncInventory: syncInventoryController };
