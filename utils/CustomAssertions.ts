import { expect } from '@playwright/test';
import { Logger } from './Logger';

export class CustomAssertions {

  static async verifyTitle(
    actualTitle: string,
    expectedTitle: string
  ): Promise<void> {

    Logger.info(
      `Validating Page Title:
       Expected: ${expectedTitle}
       Actual: ${actualTitle}`
    );

    expect(actualTitle).toBe(expectedTitle);

  }

  static async verifyText(
    actualText: string,
    expectedText: string
  ): Promise<void> {

    Logger.info(
      `Validating Text:
       Expected: ${expectedText}
       Actual: ${actualText}`
    );

    expect(actualText).toBe(expectedText);

  }

  static async verifyElementVisible(
    elementStatus: boolean
  ): Promise<void> {

    Logger.info(
      `Validating Element Visibility`
    );

    expect(elementStatus).toBeTruthy();

  }

}
