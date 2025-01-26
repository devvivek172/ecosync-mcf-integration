const request = require('supertest');
const app = require('../../src/app');

describe('API Route Integration Tests', () => {
  it('GET /inventory should return all inventory', async () => {
    const res = await request(app).get('/api/inventory');

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(expect.any(Array));
  });

  it('POST /orders should place an order', async () => {
    const res = await request(app).post('/api/orders').send({
      productId: '123',
      quantity: 1,
    });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('success', true);
  });
});
