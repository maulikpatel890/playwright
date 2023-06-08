import { FullConfig } from '@playwright/test';
import dotenv from 'dotenv';

async function globalSetup(config: FullConfig) {
    dotenv.config({
    path: `./configs/${process.env.ENVIRONMENT}.env`,
    override: true
    })
  
}

export default globalSetup;