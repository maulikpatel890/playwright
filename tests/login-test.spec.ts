import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { LandingPage } from '../pages/landing-page';
import ENV from '../utils/env';

test.beforeEach(async ({page}) => {
  const landingPage = new LandingPage(page);
  await landingPage.openWebsite();
});

test.describe('Login with valid credentials', () => {
    test('Successful Login with valid credentials @smoke @regression', async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.loginToWebsite(ENV.USERNAME_VALID, ENV.PASSWORD_VALID);
      await expect(page).toHaveURL(/.*\/logged-in-successfully/);
      await expect(loginPage.postLoginMessage).toBeVisible();
      await loginPage.logoutFromWebsite();
      await expect(page).toHaveURL(/.*\/practice-test-login/);
      await expect(loginPage.loginPageHeader).toBeVisible();
    });

    test('Login with invalid Username and valid password @regression', async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.loginToWebsite(ENV.USERNAME_INVALID, ENV.PASSWORD_VALID);
      await expect(loginPage.alertOnLogin).toContainText('Your username is invalid!');
      await expect(loginPage.postLoginMessage).toBeHidden();
      await expect(page).toHaveURL(/.*\/practice-test-login/);
    });

    test('Login with valid Username and invalid Password @Smoke @regression', async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.loginToWebsite(ENV.USERNAME_VALID, ENV.PASSWORD_INVALID);
      await expect(loginPage.alertOnLogin).toContainText('Your password is invalid!');
      await expect(loginPage.postLoginMessage).toBeHidden();
      await expect(page).toHaveURL(/.*\/practice-test-login/);
    });

});