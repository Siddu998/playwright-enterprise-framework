import { Page } from '@playwright/test';

export class LoginPage {

  constructor(private page: Page) {}

  async navigateToLoginPage() {
    await this.page.goto('https://example.com');
  }

  async enterUsername(username: string) {
    await this.page.locator('#username').fill(username);
  }

  async enterPassword(password: string) {
    await this.page.locator('#password').fill(password);
  }

  async clickLogin() {
    await this.page.locator('#login').click();
  }

  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }

}
