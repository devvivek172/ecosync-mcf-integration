import apiClient from './apiClient';

export const fetchInventory = async () => {
  const response = await apiClient.get('/inventory');
  return response.data;
};
