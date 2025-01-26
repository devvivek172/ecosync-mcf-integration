import React, { useState } from 'react';

const OrderForm = ({ onSubmit }) => {
  const [orderDetails, setOrderDetails] = useState({ productId: '', quantity: 1 });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(orderDetails);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label>
        Product ID:
        <input
          type="text"
          name="productId"
          value={orderDetails.productId}
          onChange={handleInputChange}
          className="border px-2 py-1 w-full"
        />
      </label>
      <label>
        Quantity:
        <input
          type="number"
          name="quantity"
          value={orderDetails.quantity}
          onChange={handleInputChange}
          className="border px-2 py-1 w-full"
        />
      </label>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Place Order
      </button>
    </form>
  );
};

export default OrderForm;
