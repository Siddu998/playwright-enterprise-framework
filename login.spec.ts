import { test, expect } from '@playwright/test';
import { LoginPageMethods } from '../../pages/login/LoginPageMethods';
import loginData from '../../test-data/login/loginData.json';
import { Logger } from '../../utils/logger/Logger';

test.describe('Login Module', () => {

  test('Verify user login', async ({ page }) => {

    Logger.info('Starting Login Test');

    const loginPage = new LoginPageMethods(page);

    await loginPage.navigate('https://example.com');

    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password
    );

    await expect(page).toHaveURL(/dashboard/);

    Logger.info('Login Test Completed Successfully');
  });
});
