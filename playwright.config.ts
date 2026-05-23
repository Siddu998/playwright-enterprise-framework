import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  timeout: 60000,

  expect: {

    timeout: 10000

  },

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: 1,

  workers: 2,

  reporter: [

    ['html'],

    ['list'],

    ['allure-playwright']

  ],

  use: {

    browserName: 'chromium',

    headless: true,

    viewport: {
      width: 1920,
      height: 1080
    },

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'on-first-retry',

    actionTimeout: 15000,

    navigationTimeout: 30000

  }

});
