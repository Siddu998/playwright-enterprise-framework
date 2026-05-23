
import {
  request,
  APIRequestContext,
  APIResponse
} from '@playwright/test';

import { Logger } from '../utils/Logger';

export class APIRequestManager {

  private apiContext!: APIRequestContext;

  async initialize(): Promise<void> {

    Logger.info('Initializing API Context');

    this.apiContext = await request.newContext({

      baseURL: 'https://reqres.in',

      extraHTTPHeaders: {

        'Content-Type': 'application/json'

      }

    });

  }

  async get(
    endpoint: string
  ): Promise<APIResponse> {

    Logger.info(`GET Request: ${endpoint}`);

    return await this.apiContext.get(endpoint);

  }

  async post(
    endpoint: string,
    payload: object
  ): Promise<APIResponse> {

    Logger.info(`POST Request: ${endpoint}`);

    return await this.apiContext.post(endpoint, {

      data: payload

    });

  }

  async put(
    endpoint: string,
    payload: object
  ): Promise<APIResponse> {

    Logger.info(`PUT Request: ${endpoint}`);

    return await this.apiContext.put(endpoint, {

      data: payload

    });

  }

  async delete(
    endpoint: string
  ): Promise<APIResponse> {

    Logger.info(`DELETE Request: ${endpoint}`);

    return await this.apiContext.delete(endpoint);

  }

}
