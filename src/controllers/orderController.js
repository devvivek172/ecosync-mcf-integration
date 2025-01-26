const { createOrder } = require('../services/amazonMCFService');

const createOrderController = async (req, res) => {
  try {
    const orderData = req.body;
    const response = await createOrder(orderData);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createOrder: createOrderController };
