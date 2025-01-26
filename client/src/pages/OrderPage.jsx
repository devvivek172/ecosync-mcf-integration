import React from 'react';
import OrderForm from '../components/OrderForm';
import { placeOrder } from '../services/orderService';

const OrderPage = () => {
  const handleOrderSubmit = async (orderDetails) => {
    try {
      const response = await placeOrder(orderDetails);
      alert(`Order placed successfully! Order ID: ${response.orderId}`);
    } catch (error) {
      alert(`Error placing order: ${error.message}`);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Place an Order</h1>
      <OrderForm onSubmit={handleOrderSubmit} />
    </div>
  );
};

export default OrderPage;
