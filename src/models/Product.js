const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  sku: { type: String, required: true },
  price: { type: Number, required: true },
  inventoryCount: { type: Number, default: 0 },
});

module.exports = mongoose.model('Product', productSchema);
