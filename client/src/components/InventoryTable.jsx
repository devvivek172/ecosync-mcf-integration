import React from 'react';

const InventoryTable = ({ inventory }) => {
  return (
    <table className="table-auto w-full border border-gray-200">
      <thead>
        <tr>
          <th className="px-4 py-2">Product Name</th>
          <th className="px-4 py-2">SKU</th>
          <th className="px-4 py-2">Stock</th>
        </tr>
      </thead>
      <tbody>
        {inventory.map((item) => (
          <tr key={item.id}>
            <td className="border px-4 py-2">{item.name}</td>
            <td className="border px-4 py-2">{item.sku}</td>
            <td className="border px-4 py-2">{item.stock}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InventoryTable;
