import apiClient from './apiClient';

export const placeOrder = async (orderDetails) => {
  const response = await apiClient.post('/orders', orderDetails);
  return response.data;
};
