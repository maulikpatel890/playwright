import { Locator, type Page } from '@playwright/test';
import ENV from '../utils/env';

export class LoginPage {
  readonly page: Page;
  readonly signInLink: Locator;
  readonly emailAddressInputBx: Locator;
  readonly passwordInputBx: Locator;
  readonly submitLoginBtn: Locator;
  readonly postLoginMessage: Locator;
  readonly logoutBtn: Locator;
  readonly alertOnLogin: Locator;
  readonly loginPageHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInLink = page.getByRole('link', { name: 'Sign In' });
    this.emailAddressInputBx = page.locator("[id='username']");
    this.passwordInputBx = page.locator("[id='password']");
    this.submitLoginBtn = page.locator("[id='submit']");
    this.postLoginMessage = page.getByText('Congratulations student. You successfully logged in!');
    this.logoutBtn = page.getByRole('link', { name: 'Log out' });
    this.alertOnLogin = page.locator('#error');
    this.loginPageHeader = page.getByRole('heading', { name: 'Test login' });

  }

  async goto() {
    await this.page.goto(ENV.BASE_URL);
  }

  async loginToWebsite(emailAddress: string, password: string) {
    await this.emailAddressInputBx.fill(emailAddress);
    await this.passwordInputBx.fill(password);
    await this.submitLoginBtn.click();
  }
  async logoutFromWebsite() {
    await this.logoutBtn.click();
  }
  
}