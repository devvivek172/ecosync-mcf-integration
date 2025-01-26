import React, { useEffect, useState } from 'react';
import InventoryTable from '../components/InventoryTable';
import { fetchInventory } from '../services/inventoryService';

const InventoryPage = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const loadInventory = async () => {
      const data = await fetchInventory();
      setInventory(data);
    };
    loadInventory();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Inventory</h1>
      <InventoryTable inventory={inventory} />
    </div>
  );
};

export default InventoryPage;
