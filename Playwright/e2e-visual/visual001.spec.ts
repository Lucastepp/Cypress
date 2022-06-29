import { test, expect } from '@playwright/test'
//import { delay } from '../helpers'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))


test.describe("Visual Regression YouLend Page", () => {

    test.beforeEach(async ({ page }) => {
       
        await page.goto('https://youlend.com/')

        //Closing cookies pop-up
        await page.click('body > div.cc-window.cc-floating.cc-type-info.cc-theme-classic.cc-bottom.cc-right.cc-color-override--238105223 > div > a')
    
      });

    test('Full Page Snapshot', async ({ page }) => {
        

        expect(await page.screenshot()).toMatchSnapshot('youlend-homepage.png')
    })

    test('Single Element - YL Logo', async ({ page }) => {

        //Logo Visual Test
        const logo = page.locator('#nav > div > div > div.nav-left > a > img')
        expect(await logo.screenshot()).toMatchSnapshot('YL-logo.png');


    })

    test('Single Element - Products ', async ({ page }) => {

        //Products button Visual Test
        const products = page.locator('#w-dropdown-toggle-0 > div')
        expect(await products.screenshot()).toMatchSnapshot('YL-products.png');
        //Products Dropdown Visual Test
        await page.hover('#w-dropdown-toggle-0 > div')
        const prodDropdown = page.locator('#w-dropdown-list-0')
        expect(await prodDropdown.screenshot()).toMatchSnapshot('YL-prod-dropdown.png');

        
    })

    test('Single Element - Use Cases ', async ({ page }) => {

        //Use Cases button Visual Test
        const UseCases = page.locator('#w-dropdown-toggle-1 > div')
        expect(await UseCases.screenshot()).toMatchSnapshot('YL-UseCases.png');
        //Use Cases dropdown Visual Test
        await page.hover('#w-dropdown-toggle-1 > div')
        const UseCasesDrop = page.locator('#w-dropdown-list-1')
        expect(await UseCasesDrop.screenshot()).toMatchSnapshot('YL-UseCases-dropdown.png');



    })

    test('Single Element - Resources ', async ({ page }) => {

        //Resources button Visual Test
        const resources = page.locator('#w-dropdown-toggle-2 > div')
        expect(await resources.screenshot()).toMatchSnapshot('YL-Resources.png');
        //Resources dropdown Visual Test
        await page.hover('#w-dropdown-toggle-2 > div')
        const resourcesDrop = page.locator('#w-dropdown-list-2')
        expect(await resourcesDrop.screenshot()).toMatchSnapshot('YL-Resources-dropdown.png');


    })

    test('Single Element - Company ', async ({ page }) => {

        //Company button Visual Test
        const company = page.locator('#w-dropdown-toggle-3 > div')
        expect(await company.screenshot()).toMatchSnapshot('YL-Company.png');

        //Company dropdown Visual Test
        await page.hover('#w-dropdown-toggle-3 > div')
        const companyDrop = page.locator('#w-dropdown-list-3')
        expect(await companyDrop.screenshot()).toMatchSnapshot('YL-company-dropdown.png');


    })

    test('Single Element - Login ', async ({ page }) => {

        //Login button Visual Test
        const login = page.locator('#nav > div > div > div.nav-right > div.nav-buttons > a.btn.btn-white__ghost.btn-nav.w-button')
        expect(await login.screenshot()).toMatchSnapshot('YL-LoginButton.png');


        //? Ask Mo about Auth0 - Not possible to take printscreens
        //Login Auth0 Screen Visual Test
        //await page.click('#nav > div > div > div.nav-right > div.nav-buttons > a.btn.btn-white__ghost.btn-nav.w-button')
        //expect(await page.screenshot()).toMatchSnapshot('YL-Login-Auth0.png')
        // const loginAuth0 = page.locator('#auth0-lock-container-1 > div > div.auth0-lock-center > form > div > div > div:nth-child(3)')
        // expect(await loginAuth0.screenshot()).toMatchSnapshot('YL-LoginAuth0.png');

        // const loginAuth2 = page.locator('#auth0-lock-container-1 > div > div.auth0-lock-center > form > div > div > div.auth0-lock-header > div.auth0-lock-header-welcome')
        // expect(await loginAuth2.screenshot()).toMatchSnapshot('YL-LoginAuth2.png');
    })
    
    test('Single Element - Seeking Funding ', async ({ page }) => {

        //Seeking Funding button Visual Test
        const seeking = page.locator('#nav > div > div > div.nav-right > div.nav-buttons > a.btn.btn-white.btn-nav.w-button')
        expect(await seeking.screenshot()).toMatchSnapshot('YL-SeekingFunding.png');

        //Checking Seeking Funding Page Visual Test
        await page.click('#nav > div > div > div.nav-right > div.nav-buttons > a.btn.btn-white.btn-nav.w-button')

        //? Force wait for 1 sec to have full popup as expected
        await delay(1500)

        //Closing cookies pop-up
        await page.click('body > div.cc-window.cc-floating.cc-type-info.cc-theme-classic.cc-bottom.cc-right.cc-color-override--238105223 > div > a')

        const SeekingFundPage = page.locator('body')
        expect(await SeekingFundPage.screenshot()).toMatchSnapshot('YL-SeekingF-Page.png');

    })


    test('Single Element - Capital ', async ({ page }) => {

        //Company button Visual Test
        await page.keyboard.down('PageDown')
        const capital = await page.locator('body > main > section:nth-child(3) > div > div.grid-2-col > div:nth-child(1) > div')
        expect(await capital.screenshot()).toMatchSnapshot('YL-Capital-card.png');

        //Company dropdown Visual Test
        await page.click('body > main > section:nth-child(3) > div > div.grid-2-col > div:nth-child(1) > div > div > a')

        //? Force wait for 1 sec to have full popup as expected
        await delay(1000)

        //Closing cookies pop-up
        await page.click('body > div.cc-window.cc-floating.cc-type-info.cc-theme-classic.cc-bottom.cc-right.cc-color-override--238105223 > div > a')

        expect(await page.screenshot()).toMatchSnapshot('YL-capital-page.png')
        

    })

    test('Single Element - Instant Payouts ', async ({ page }) => {

        //Company button Visual Test
        await page.keyboard.down('PageDown')
        const instant = await page.locator('body > main > section:nth-child(3) > div > div.grid-2-col > div:nth-child(2) > div')
        expect(await instant.screenshot()).toMatchSnapshot('YL-InstantPayouts-card.png');

        //Company dropdown Visual Test
        await page.click('body > main > section:nth-child(3) > div > div.grid-2-col > div:nth-child(2) > div > div > a')

        //? Force wait for 1 sec to have full popup as expected
        await delay(1000)

        expect(await page.screenshot()).toMatchSnapshot('YL-InstantPayouts-page.png')
        
    })

    test('Single Element - Why partner w/ YouLend Cards', async ({ page }) => {

        //Company button Visual Test
        for(let i = 0; i < 2; i++) {
            await page.keyboard.down('PageDown');
        }
        const instant = await page.locator('body > main > section:nth-child(4) > div')
        expect(await instant.screenshot()).toMatchSnapshot('YL-Why-partner-cards.png');

        //?No need to check all the buttons because the all route to /use-cases

        //Company dropdown Visual Test
        await page.click('#w-node-_06f7f875-6196-adb6-a649-8a97c10d5dfc-c10d5dda > div > div > a')
        expect(await page.screenshot()).toMatchSnapshot('YL-Use-cases-page.png')
        
    })

    test('Single Element - Embedded finance', async ({ page }) => {

        //Company button Visual Test
        for(let i = 0; i < 3; i++) {
            await page.keyboard.down('PageDown');
        }
        const instant = await page.locator('body > main > section:nth-child(5) > div > div')
        expect(await instant.screenshot()).toMatchSnapshot('YL-Embedded finance card.png');

        //?No need to check all the buttons because the all route to /use-cases

        //Company dropdown Visual Test
        await page.click('#w-node-_91a2e957-94d5-4799-2fca-b4d736a54c04-36a54bff > div > a')

        //? Force wait for 1 sec to have full popup as expected
        await delay(1500)

        expect(await page.screenshot()).toMatchSnapshot('YL-EmbbededFinance-page.png')
        
    })

    test('Single Element - Less Cash, more possitibily', async ({ page }) => {

        //Company button Visual Test
        for(let i = 0; i < 4; i++) {
            await page.keyboard.down('PageDown');
        }
        const instant = await page.locator('body > main > section.section.white > div')
        expect(await instant.screenshot()).toMatchSnapshot('YL-Less-cash-card.png');

        //?No need to check all the buttons because the all route to /use-cases

        //Company dropdown Visual Test
        await page.click('#w-node-_050e9792-cdd7-9df1-c39b-9b440b7570a3-0b7570a0 > div > a')

        //? Force wait for 1 sec to have full popup as expected
        await delay(1500)

        expect(await page.screenshot()).toMatchSnapshot('YL-lessCash-whitepaper-page.png')
        
    })

    test('Single Element - Recent Blog Posts', async ({ page }) => {

        //Company button Visual Test
        for(let i = 0; i < 5; i++) {
            await page.keyboard.down('PageDown');
        }
        const instant = await page.locator('body > main > section:nth-child(8) > div')

        //? Force wait for 1 sec to have full popup as expected
        await delay(1000)

        expect(await instant.screenshot()).toMatchSnapshot('YL-Recent-Blog-Card.png');

        //?No need to check all the buttons because the all route to /use-cases

        //Company dropdown Visual Test
        await page.click('body > main > section:nth-child(8) > div > div.title-block.has-button > a')
        expect(await page.screenshot()).toMatchSnapshot('YL-Recent-Blog-page.png')
        
    })

    test('Single Element - Book a Demo ', async ({ page }) => {

        //Company button Visual Test
        const book = page.locator('body > main > div.section.hero > div > div > div.hero-content > div')
        expect(await book.screenshot()).toMatchSnapshot('YL-Book-a-Demo.png');

        //Company dropdown Visual Test
        await page.click('body > main > div.section.hero > div > div > div.hero-content > div')
        const bookPage = page.locator('body > div.popup-modal > div')

        //? Force wait for 1 sec to have full popup as expected
        await delay(1000)
        //////
        expect(await bookPage.screenshot()).toMatchSnapshot('YL-Book-a-Demo-Popup.png');


    })

    test('Single Element - Explore the Docs ', async ({ page }) => {

       //Scroll down to find the button
        for(let i = 0; i < 6; i++) {
            await page.keyboard.down('PageDown');
        }
        
        const explore = page.locator('body > main > div.section.cta-banner.blue-banner > div > div > div > a')
        expect(await explore.screenshot()).toMatchSnapshot('YL-Explore-the-docs.png');

        //Company dropdown Visual Test
        await page.click('body > main > div.section.cta-banner.blue-banner > div > div > div > a')

        //? Force wait for 1 sec to have full popup as expected
        await delay(1000)

        expect(await page.screenshot()).toMatchSnapshot('YL-Explore-the-docs-Page.png')
        
    })

    test('Single Element - Contact Page ', async ({ page }) => {

       //Scroll down to find the button
        for(let i = 0; i < 6; i++) {
            await page.keyboard.down('PageDown');
        }
        
        const explore = page.locator('#w-node-ed9ab0e0-cdfa-1189-0d53-2f4272a5c499-72a5c472 > ul > li:nth-child(4) > a')
        expect(await explore.screenshot()).toMatchSnapshot('YL-ContactUs-button.png');

        //Company dropdown Visual Test
        await page.click('#w-node-ed9ab0e0-cdfa-1189-0d53-2f4272a5c499-72a5c472 > ul > li:nth-child(4) > a')
        expect(await page.screenshot()).toMatchSnapshot('YL-ContactUs-Page.png')
        
    })


})