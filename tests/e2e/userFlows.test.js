const puppeteer = require('puppeteer');

describe('End-to-End User Flow Tests', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should load the homepage', async () => {
    await page.goto('http://localhost:3000');

    const title = await page.title();
    expect(title).toBe('EcoSync');
  });

  it('should place an order via the UI', async () => {
    await page.goto('http://localhost:3000/orders');

    await page.type('input[name="productId"]', '123');
    await page.type('input[name="quantity"]', '2');
    await page.click('button[type="submit"]');

    const confirmationText = await page.$eval('.confirmation', (el) => el.textContent);
    expect(confirmationText).toContain('Order placed successfully!');
  });
});
