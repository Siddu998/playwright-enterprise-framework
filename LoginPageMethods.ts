import { Page } from '@playwright/test';
import { BasePage } from '../base/BasePage';
import { LoginPageLocators } from './LoginPageLocators';

export class LoginPageMethods extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  async enterUsername(username: string) {
    await this.type(LoginPageLocators.usernameTextbox, username);
  }

  async enterPassword(password: string) {
    await this.type(LoginPageLocators.passwordTextbox, password);
  }

  async clickLoginButton() {
    await this.click(LoginPageLocators.loginButton);
  }

  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }
}
