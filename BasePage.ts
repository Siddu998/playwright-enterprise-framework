import { Page } from '@playwright/test';
import { Logger } from '../../utils/logger/Logger';

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
}
