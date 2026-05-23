import { test, expect } from '@playwright/test';
import { LoginPageMethods } from '../pages/LoginPageMethods';
import loginData from '../test-data/loginData.json';
import { Logger } from '../utils/Logger';

test.describe('Login Module', () => {

  test.beforeEach(async ({ page }) => {

    Logger.info('Starting Test Execution');

    await page.goto('https://example.com');

  });

  test.afterEach(async ({ page }) => {

    Logger.success('Test Execution Completed');

    await page.close();

  });

  test('Verify user login', async ({ page }) => {

    const loginPage = new LoginPageMethods(page);

    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password
    );

    await expect(page).toHaveURL(/dashboard/);

  });

});
