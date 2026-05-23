import { request, APIRequestContext } from '@playwright/test';
import { Logger } from '../utils/Logger';

export class UserAPI {

  private static apiContext: APIRequestContext;

  static async createAPIContext() {

    Logger.info('Creating API Context');

    this.apiContext = await request.newContext({

      baseURL: 'https://reqres.in'

    });

  }

  static async getUsers() {

    Logger.info('Fetching Users API');

    const response = await this.apiContext.get(
      '/api/users?page=2'
    );

    Logger.success(
      `Users API Response Status: ${response.status()}`
    );

    return response;

  }

}
