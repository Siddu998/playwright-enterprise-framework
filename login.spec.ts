import { test, expect } from '../fixtures/baseFixture';
import { TestDataManager }from '../test-data/TestDataManager';
import { Logger } from '../utils/Logger';
import { CustomAssertions } from '../utils/CustomAssertions';



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

      TestDataManager.getLoginData().username,
      TestDataManager.getLoginData().password
      
    );

    const dashboardVisible =
      await loginPage.verifyDashboardVisible();

    await CustomAssertions.verifyElementVisible(
  dashboardVisible
);

  });

});
