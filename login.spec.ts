import { test, expect } from '../fixtures/baseFixture';
import loginData from '../test-data/loginData.json';
import { Logger } from '../utils/Logger';

test.describe('Login Module', () => {

  test.beforeEach(async ({ loginPage }) => {

    Logger.info('Starting Test Execution');

    await loginPage.navigateToLoginPage();

  });

  test.afterEach(async ({ page }, testInfo) => {

    if (testInfo.status !== testInfo.expectedStatus) {

      Logger.error(
        'Test Failed - Capturing Screenshot'
      );

      await page.screenshot({

        path: `screenshots/${testInfo.title}.png`

      });

    }

    Logger.success('Test Execution Completed');

  });

  test('Verify user login', async ({ loginPage }) => {

    await loginPage.login(

      loginData.validUser.username,
      loginData.validUser.password

    );

    const dashboardVisible =
      await loginPage.verifyDashboardVisible();

    expect(dashboardVisible).toBeTruthy();

  });

});
