export class CommonUtils {

  static generateRandomEmail() {

    return `testuser${Date.now()}@mail.com`;

  }

  static getCurrentDate() {

    return new Date().toISOString();

  }

}
