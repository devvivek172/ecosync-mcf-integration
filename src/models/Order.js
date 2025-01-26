const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
  {
    orderId: { type: String, required: true },
    items: [
      {
        sku: { type: String, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    status: { type: String, default: 'Pending' },
    customer: {
      name: { type: String, required: true },
      address: { type: String, required: true },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);
