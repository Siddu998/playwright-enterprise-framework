import { test, expect } from '@playwright/test';

test('Verify login page title', async ({ page }) => {

  await page.goto('https://example.com');

  await expect(page).toHaveTitle(/Example/);

});
