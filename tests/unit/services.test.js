const { fetchInventoryFromAmazon, placeOrderOnShopify } = require('../../src/services/shopifyService');

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: [{ id: 1, name: 'Sample Product' }] })),
  post: jest.fn(() => Promise.resolve({ data: { success: true, orderId: '12345' } })),
}));

describe('Shopify Service Tests', () => {
  it('should fetch inventory from Shopify', async () => {
    const inventory = await fetchInventoryFromAmazon();

    expect(inventory).toEqual(expect.any(Array));
    expect(inventory[0]).toHaveProperty('id');
  });

  it('should place an order on Shopify', async () => {
    const orderResponse = await placeOrderOnShopify({ productId: '123', quantity: 2 });

    expect(orderResponse).toHaveProperty('success', true);
    expect(orderResponse).toHaveProperty('orderId');
  });
});
