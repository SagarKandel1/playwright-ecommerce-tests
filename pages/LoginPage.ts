import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput = 'input[name="email"]';
  readonly passwordInput = 'input[name="password"]';
  readonly loginButton = 'button[type="submit"]';


    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
    await this.page.goto('https://www.phptravels.net/login');
  }

// ...existing code...
async login(email: string, password: string) {
    await this.page.waitForSelector(this.emailInput, { state: 'visible' });
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
}
// ...existing code...

  async isDashboardVisible(): Promise<boolean> {
    return this.page.locator('h2:has-text("Hi, Demo User")').isVisible();
  }
   
}

