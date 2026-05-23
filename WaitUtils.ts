import { Page } from '@playwright/test';

export class WaitUtils {

  static async waitForPageLoad(page: Page) {
    await page.waitForLoadState('networkidle');
  }

  static async waitForElement(page: Page, locator: string) {
    await page.locator(locator).waitFor();
  }
}
