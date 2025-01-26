const { getInventory, placeOrder } = require('../../src/controllers/inventoryController');
const mockRequest = (data = {}) => ({ body: data });
const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('Inventory Controller Tests', () => {
  it('should fetch inventory successfully', async () => {
    const req = mockRequest();
    const res = mockResponse();

    await getInventory(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.any(Array));
  });

  it('should place an order successfully', async () => {
    const req = mockRequest({ productId: '123', quantity: 2 });
    const res = mockResponse();

    await placeOrder(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ success: true }));
  });
});
