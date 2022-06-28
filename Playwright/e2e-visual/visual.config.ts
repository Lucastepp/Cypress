import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {

    timeout: 60000,
    retries: 0,
    testDir: "../e2e-visual",

    use: {
        headless: true,
        actionTimeout: 15000,
        video: "on",
        screenshot: 'off',
        ignoreHTTPSErrors: true

    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        },
    ],
};
export default config;