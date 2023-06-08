import { type Page } from '@playwright/test';
import ENV from '../utils/env';

export class LandingPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openWebsite() {
    await this.page.goto(ENV.BASE_URL);
  }

  
}