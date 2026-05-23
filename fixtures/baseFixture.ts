import { test as base } from '@playwright/test';
import { LoginPageMethods } from '../pages/LoginPageMethods';

type MyFixtures = {

  loginPage: LoginPageMethods;

};

export const test = base.extend<MyFixtures>({

  loginPage: async ({ page }, use) => {

    const loginPage = new LoginPageMethods(page);

    await use(loginPage);

  }

});

export { expect } from '@playwright/test';
