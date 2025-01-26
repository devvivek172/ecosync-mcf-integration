const mongoose = require('mongoose');
const Inventory = require('../../src/models/Inventory');

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/ecosync_test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Database Integration Tests', () => {
  it('should save and fetch inventory from the database', async () => {
    const testItem = new Inventory({
      name: 'Test Product',
      sku: 'TEST123',
      stock: 100,
    });

    await testItem.save();

    const fetchedItem = await Inventory.findOne({ sku: 'TEST123' });

    expect(fetchedItem).not.toBeNull();
    expect(fetchedItem.name).toBe('Test Product');
  });
});
