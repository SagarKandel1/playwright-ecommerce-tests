import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('User can login with valid email and password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('user@phptravels.com', 'demouser');

  // ✅ Assert login success
 await expect(page).toHaveURL('https://www.phptravels.net/dashboard');
  
});
