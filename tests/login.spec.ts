import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('User can login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Navigate to login page URL (example URL, adjust if needed)
  await page.goto('https://the-internet.herokuapp.com/login');

  // Use the login method from LoginPage to perform login
  await loginPage.login('testuser@example.com', 'testpassword');

  // Assert that after login the URL changes or a logout button appears
  await expect(page).toHaveURL(/dashboard|account|profile/); // adjust regex to your site
});
