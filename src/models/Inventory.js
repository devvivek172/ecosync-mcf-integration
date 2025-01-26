const mongoose = require('mongoose');

const inventorySchema = mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  available: { type: Number, required: true },
  reserved: { type: Number, default: 0 },
});

module.exports = mongoose.model('Inventory', inventorySchema);
