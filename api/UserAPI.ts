import { APIRequestContext } from '@playwright/test';

export class UserAPI {

  readonly request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async getUsers() {

    const response = await this.request.get('https://reqres.in/api/users');

    return response.json();

  }

}
