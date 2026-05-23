export class CommonUtils {

  static generateRandomEmail(): string {

    return `testuser${Date.now()}@mail.com`;

  }

  static generateRandomNumber(): number {

    return Math.floor(Math.random() * 100000);

  }

  static getCurrentDate(): string {

    return new Date().toISOString();

  }

  static validateText(
    actual: string,
    expected: string
  ): void {

    if (actual !== expected) {

      throw new Error(
        `
        Validation Failed
        Actual Value   : ${actual}
        Expected Value : ${expected}
        `
      );

    }

  }

  static formatLogMessage(
    module: string,
    message: string
  ): string {

    return `[${module}] ${message}`;

  }

}
