import { Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput = 'input[name="email"]';
    readonly passwordInput = 'input[name="password"]';
    readonly loginButton = 'button[type="submit"]';


    constructor(page: Page) {
        this.page = page;
    }

    async login(username: string, password: string) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);

        // Close cookie consent if visible
        const consentButton = this.page.locator('button#accept-cookies, button.cookie-consent-accept, button[data-qa="cookie-accept"]');
        if (await consentButton.isVisible()) {
            await consentButton.click();
        }

        await this.page.click(this.loginButton);
    }
}

