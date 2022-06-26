import { test, expect } from '@playwright/test'

test.describe("Visual Regression YouLend Page", () => {

    test('Full Page Snapshot', async ({ page }) => {
        await page.goto('https://youlend.com/')
        expect(await page.screenshot()).toMatchSnapshot('youlend-homepage.png')
    })

    test('Single Element - YL Logo', async ({ page }) => {
        await page.goto('https://youlend.com/')

        //Logo Visual Test
        const logo = page.locator('#nav > div > div > div.nav-left > a > img')
        expect(await logo.screenshot()).toMatchSnapshot('YL-logo.png');


    })

    test('Single Element - Products ', async ({ page }) => {
        await page.goto('https://youlend.com/')

        //Products button Visual Test
        const products = page.locator('#w-dropdown-toggle-0 > div')
        expect(await products.screenshot()).toMatchSnapshot('YL-products.png');
        //Products Dropdown Visual Test
        await page.hover('#w-dropdown-toggle-0 > div')
        const prodDropdown = page.locator('#w-dropdown-list-0')
        expect(await prodDropdown.screenshot()).toMatchSnapshot('YL-prod-dropdown.png');


    })

    test('Single Element - Use Cases ', async ({ page }) => {
        await page.goto('https://youlend.com/')

        //Use Cases button Visual Test
        const UseCases = page.locator('#w-dropdown-toggle-1 > div')
        expect(await UseCases.screenshot()).toMatchSnapshot('YL-UseCases.png');
        //Use Cases dropdown Visual Test
        await page.hover('#w-dropdown-toggle-1 > div')
        const UseCasesDrop = page.locator('#w-dropdown-list-1')
        expect(await UseCasesDrop.screenshot()).toMatchSnapshot('YL-UseCases-dropdown.png');



    })

    test('Single Element - Resources ', async ({ page }) => {
        await page.goto('https://youlend.com/')

        //Resources button Visual Test
        const resources = page.locator('#w-dropdown-toggle-2 > div')
        expect(await resources.screenshot()).toMatchSnapshot('YL-Resources.png');
        //Resources dropdown Visual Test
        await page.hover('#w-dropdown-toggle-2 > div')
        const resourcesDrop = page.locator('#w-dropdown-list-2')
        expect(await resourcesDrop.screenshot()).toMatchSnapshot('YL-Resources-dropdown.png');


    })

    test('Single Element - Company ', async ({ page }) => {
        await page.goto('https://youlend.com/')

        //Company button Visual Test
        const company = page.locator('#w-dropdown-toggle-3 > div')
        expect(await company.screenshot()).toMatchSnapshot('YL-Company.png');

        //Company dropdown Visual Test
        await page.hover('#w-dropdown-toggle-3 > div')
        const companyDrop = page.locator('#w-dropdown-list-3')
        expect(await companyDrop.screenshot()).toMatchSnapshot('YL-company-dropdown.png');


    })

    test('Single Element - Login ', async ({ page }) => {
        await page.goto('https://youlend.com/')

        //Login button Visual Test
        const login = page.locator('#nav > div > div > div.nav-right > div.nav-buttons > a.btn.btn-white__ghost.btn-nav.w-button')
        expect(await login.screenshot()).toMatchSnapshot('YL-LoginButton.png');

        //Login Auth0 Screen Visual Test
        await page.click('#nav > div > div > div.nav-right > div.nav-buttons > a.btn.btn-white__ghost.btn-nav.w-button')
        const loginAuth0 = page.locator('#auth0-lock-container-1 > div')
        expect(await loginAuth0.screenshot()).toMatchSnapshot('YL-LoginAuth0.png');
       

    })

    test('Single Element - Seeking Funding ', async ({ page }) => {
        await page.goto('https://youlend.com/')

        //Seeking Funding button Visual Test
        const company = page.locator('#nav > div > div > div.nav-right > div.nav-buttons > a.btn.btn-white.btn-nav.w-button')
        expect(await company.screenshot()).toMatchSnapshot('YL-SeekingFunding.png');

        //Checking Seeking Funding Page Visual Test
        await page.click('#nav > div > div > div.nav-right > div.nav-buttons > a.btn.btn-white.btn-nav.w-button')
        const SeekingFundPage = page.locator('body')
        expect(await SeekingFundPage.screenshot()).toMatchSnapshot('YL-SeekingF-Page.png');

    })

})