import { Page } from '@playwright/test';
import { Logger } from './Logger';

export class BasePage {

  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string) {
    Logger.info(`Navigating to URL: ${url}`);
    await this.page.goto(url);
  }

  async click(locator: string) {
    Logger.info(`Clicking on locator: ${locator}`);
    await this.page.locator(locator).click();
  }

  async type(locator: string, value: string) {
    Logger.info(`Entering value into locator: ${locator}`);
    await this.page.locator(locator).fill(value);
  }

  async waitForElement(locator: string) {
    await this.page.locator(locator).waitFor();
  }

  async getText(locator: string) {
    return await this.page.locator(locator).textContent();
  }

  async isElementVisible(locator: string) {
    return await this.page.locator(locator).isVisible();
  }

  async takeScreenshot(fileName: string) {
    await this.page.screenshot({
      path: `screenshots/${fileName}.png`
    });
  }

}
