import { test, expect } from '@playwright/test';

import { APIRequestManager }
from '../api/APIRequestManager';

import { Logger } from '../utils/Logger';

test.describe('API Automation', () => {

  test('Verify GET Users API', async () => {

    const apiManager =
      new APIRequestManager();

    await apiManager.initialize();

    const response =
      await apiManager.get('/api/users?page=2');

    Logger.success(
      `API Response Status:
       ${response.status()}`
    );

    expect(response.status()).toBe(200);

  });

});
