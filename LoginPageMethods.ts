import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { LoginPageLocators } from './LoginPageLocators';
import { Logger } from '../utils/Logger';

export class LoginPageMethods extends BasePage {

  constructor(page: Page) {

    super(page);

  }

  async navigateToLoginPage(): Promise<void> {

    Logger.info('Navigating to Login Page');

    await this.navigate('https://example.com');

  }

  async enterUsername(username: string): Promise<void> {

    Logger.info('Entering Username');

    await this.type(
      LoginPageLocators.usernameTextbox,
      username
    );

  }

  async enterPassword(password: string): Promise<void> {

    Logger.info('Entering Password');

    await this.type(
      LoginPageLocators.passwordTextbox,
      password
    );

  }

  async clickLoginButton(): Promise<void> {

    Logger.info('Clicking Login Button');

    await this.click(
      LoginPageLocators.loginButton
    );

  }

  async login(
    username: string,
    password: string
  ): Promise<void> {

    Logger.info('Executing Login Flow');

    await this.enterUsername(username);

    await this.enterPassword(password);

    await this.clickLoginButton();

  }

  async verifyDashboardVisible(): Promise<boolean> {

    Logger.info('Validating Dashboard Visibility');

    return await this.isElementVisible(
      LoginPageLocators.dashboardHeader
    );

  }

}
