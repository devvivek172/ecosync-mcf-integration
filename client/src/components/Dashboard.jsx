import React from 'react';
import InventoryTable from './InventoryTable';
import OrderForm from './OrderForm';

const Dashboard = ({ inventory, placeOrder }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Inventory</h2>
        <InventoryTable inventory={inventory} />
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Place an Order</h2>
        <OrderForm onSubmit={placeOrder} />
      </div>
    </div>
  );
};

export default Dashboard;
