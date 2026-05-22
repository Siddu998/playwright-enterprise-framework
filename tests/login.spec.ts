import { test, expect } from '@playwright/test';

test.describe('Login Module', () => {

  test('Verify user login', async ({ page }) => {

    await page.goto('https://example.com');

    await page.locator('#username').fill('testuser');

    await page.locator('#password').fill('password123');

    await page.locator('#login').click();

    await expect(page).toHaveURL(/dashboard/);

  });

});
