import { test, expect } from '@playwright/test'
import { VisualHelper } from "../e2e-visual/e2e-visual-helper";

let helper: VisualHelper;
let auxFunc;


test.describe("Visual Regression YouLend Page", () => {

    test.beforeEach(async ({ page }) => {
       
        helper = new VisualHelper(page)
        //await page.goto('https://youlend.com/')
        await helper.loadHomePage("youlend")
        //Closing cookies pop-up // default delay afterwards is 1000ms
        await helper.closeCookiesProd()
      });

    test('0 - Full Page Snapshot', async ({ page }) => {
        await helper.pageScreenShot('youlend-homepage.png')
        //expect(await page.screenshot()).toMatchSnapshot('youlend-homepage.png')
    })

    test('1 - Single Element - YL Logo', async ({ page }) => {
        //Logo Visual Test
        await helper.locateAndTakeScreenShot(auxFunc, '#nav > div > div > div.nav-left > a > img', 'YL-logo.png')
        // const logo = page.locator('#nav > div > div > div.nav-left > a > img')
        // expect(await logo.screenshot()).toMatchSnapshot('YL-logo.png');
    })

    test('2 - Single Element - Products ', async ({ page }) => {
        //Products button Visual Test
        await helper.locateAndTakeScreenShot(auxFunc, '#w-dropdown-toggle-0', 'YL-products.png')
        // const products = page.locator('#w-dropdown-toggle-0')
        // expect(await products.screenshot()).toMatchSnapshot('YL-products.png');
        //Products Dropdown Visual Test
        await page.click('#w-dropdown-toggle-0 > div')
        await helper.locateAndTakeScreenShot(auxFunc, '#w-dropdown-list-0', 'YL-prod-dropdown.png')
        // const prodDropdown = page.locator('#w-dropdown-list-0')
        // expect(await prodDropdown.screenshot()).toMatchSnapshot('YL-prod-dropdown.png');

        //? Dropdown OVERVIEW
        await page.click('#w-dropdown-list-0 > div.dropdown-inner > div.dropdown-menu > a:nth-child(2)')
        expect(page.url()).toContain("/products-overview")
        
         //? Dropdown CAPITAL
        await page.hover('#w-dropdown-toggle-0 > div')
        await page.click('#w-dropdown-list-0 > div.dropdown-inner > div.dropdown-menu > a:nth-child(3) > div')
        expect(page.url()).toContain("/products/capital")

         //? Dropdown INSTANT PAYOUTS
         await page.hover('#w-dropdown-toggle-0 > div')
         await page.click('#w-dropdown-list-0 > div.dropdown-inner > div.dropdown-menu > a:nth-child(4) > div')
         expect(page.url()).toContain("/products/instant-payouts")   
    })

    test('3 - Single Element - Use Cases ', async ({ page }) => {
        //Use Cases button Visual Test
        await helper.locateAndTakeScreenShot(auxFunc, '#w-dropdown-toggle-1', 'YL-UseCases.png')
        // const UseCases = page.locator('#w-dropdown-toggle-1')
        // expect(await UseCases.screenshot()).toMatchSnapshot('YL-UseCases.png');
        //Use Cases dropdown Visual Test
        await page.click('#w-dropdown-toggle-1')
        await helper.locateAndTakeScreenShot(auxFunc, '#w-dropdown-list-1', 'YL-UseCases-dropdown.png')
        // const UseCasesDrop = page.locator('#w-dropdown-list-1')
        // expect(await UseCasesDrop.screenshot()).toMatchSnapshot('YL-UseCases-dropdown.png');

        //* Dropdown USE CASES
        //await page.click('#w-dropdown-toggle-1')
        await page.click('#w-dropdown-list-1 > div.dropdown-inner > div.dropdown-menu > a:nth-child(2) > div')
        expect(page.url()).toContain("/use-cases-overview")
        
         //? Dropdown PAYMENT SERVICE PROVIDERS
        await page.hover('#w-dropdown-toggle-1 > div')
        await page.click('#w-dropdown-list-1 > div.dropdown-inner > div.dropdown-menu > a:nth-child(3) > div')
        expect(page.url()).toContain("/use-cases/payment-service-providers")

         //? Dropdown E-COMMENCE & TECH
         await page.hover('#w-dropdown-toggle-1 > div')
         await page.click('#w-dropdown-list-1 > div.dropdown-inner > div.dropdown-menu > a:nth-child(4) > div')
         expect(page.url()).toContain("/use-cases/ecommerce-and-tech")

         //? Dropdown BROKERS
         await page.hover('#w-dropdown-toggle-1 > div')
         await page.click('#w-dropdown-list-1 > div.dropdown-inner > div.dropdown-menu > a:nth-child(5) > div')
         expect(page.url()).toContain("/use-cases/brokers")

          //? Dropdown BANKS
          await page.hover('#w-dropdown-toggle-1 > div')
          await page.click('#w-dropdown-list-1 > div.dropdown-inner > div.dropdown-menu > a:nth-child(6) > div')
          expect(page.url()).toContain("/use-cases/banks")
    })

    test('4 - Single Element - Resources ', async ({ page }) => {

        //Resources button Visual Test
        await helper.locateAndTakeScreenShot(auxFunc, '#w-dropdown-toggle-2', 'YL-Resources.png')
        // const resources = page.locator('#w-dropdown-toggle-2')
        // expect(await resources.screenshot()).toMatchSnapshot('YL-Resources.png');
        //Resources dropdown Visual Test
        await page.click('#w-dropdown-toggle-2')
        await helper.locateAndTakeScreenShot(auxFunc, '#w-dropdown-list-2', 'YL-Resources-dropdown.png')
        // const resourcesDrop = page.locator('#w-dropdown-list-2')
        // expect(await resourcesDrop.screenshot()).toMatchSnapshot('YL-Resources-dropdown.png');

        //* Dropdown RESOURCES
        //? Dropdown OVERVIEW
        await page.click('#w-dropdown-list-2 > div.dropdown-inner > div.dropdown-menu > a:nth-child(2) > div')
        expect(page.url()).toContain("/resources-overview")
        
         //? Dropdown partner case studies overview
        await page.click('#w-dropdown-toggle-2 > div')
        await page.click('#w-dropdown-list-2 > div.dropdown-inner > div.dropdown-menu > a:nth-child(3) > div')
        expect(page.url()).toContain("/partner-case-studies-overview")

        //? Dropdown Blog
        await page.hover('#w-dropdown-toggle-2 > div')
        await page.click('#w-dropdown-list-2 > div.dropdown-inner > div.dropdown-menu > a:nth-child(4) > div')
        expect(page.url()).toContain("/blog-overview")

        //? Dropdown FAQS
        await page.hover('#w-dropdown-toggle-2 > div')
        await page.click('#w-dropdown-list-2 > div.dropdown-inner > div.dropdown-menu > a:nth-child(5) > div')
        expect(page.url()).toContain("/resources/faqs")
    })

    test.only('5 - Single Element - Company ', async ({ page }) => {
        //Company button Visual Test
        await helper.locateAndTakeScreenShot(auxFunc, '#w-dropdown-toggle-3', 'YL-Company.png')
        // const company = page.locator('#w-dropdown-toggle-3')
        // expect(await company.screenshot()).toMatchSnapshot('YL-Company.png');

        //Company dropdown Visual Test
        await page.click('#w-dropdown-toggle-3')
        await helper.locateAndTakeScreenShot(auxFunc, '#w-dropdown-list-3', 'YL-company-dropdown.png')
        // const companyDrop = page.locator('#w-dropdown-list-3')
        // expect(await companyDrop.screenshot()).toMatchSnapshot('YL-company-dropdown.png');

        //* Dropdown COMPANY
        //? Dropdown OVERVIEW
        await page.click('#w-dropdown-list-3 > div.dropdown-inner > div.dropdown-menu > a:nth-child(2) > div')
        expect(page.url()).toContain("/company-overview")

        //? Dropdown GLOBAL COVERAGE
        await page.click('#w-dropdown-toggle-3 > div')
        await page.click('#w-dropdown-list-3 > div.dropdown-inner > div.dropdown-menu > a:nth-child(3) > div')
        expect(page.url()).toContain("/company/global-coverage")

        //? Dropdown CONTACT
        await page.hover('#w-dropdown-toggle-3 > div')
        await page.click('#w-dropdown-list-3 > div.dropdown-inner > div.dropdown-menu > a:nth-child(5) > div')
        expect(page.url()).toContain("/company/contact")

        //!Need to check how to check URL when opening new window >>
        //? Dropdown CAREERS - INVERTED WITH LAST DROPDOWN OPTION BECAUSE CAREERS BRINGS US TO LINKEDIN PAGE
        //await page.hover('#w-dropdown-toggle-3 > div')
        //await page.click('#w-dropdown-list-3 > div.dropdown-inner > div.dropdown-menu > a:nth-child(4) > div')
        //expect(page.url()).toContain("https://www.linkedin.com/company/youlend/jobs/")
    })

    test.only('6 - Single Element - Login ', async ({ page }) => {

        //Login button Visual Test
        await helper.locateAndTakeScreenShot(
            auxFunc, 
            '#nav > div > div > div.nav-right > div.nav-buttons > a.btn.btn-white__ghost.btn-nav.w-button', 
            'YL-LoginButton.png')
        // const login = page.locator('#nav > div > div > div.nav-right > div.nav-buttons > a.btn.btn-white__ghost.btn-nav.w-button')
        // expect(await login.screenshot()).toMatchSnapshot('YL-LoginButton.png');

        await page.click('#nav > div > div > div.nav-right > div.nav-buttons > a.btn.btn-white__ghost.btn-nav.w-button')

        expect(page.url()).toContain("https://youlend.com/apply/dashboard/login");

          await helper.delay(3000);

          await helper.pageScreenShot(`YL-Auth0-page.png`)
        //   expect(await page.screenshot()).toMatchSnapshot(
        //     `YL-Auth0-page.png`
        //   );
    })
    
    test.only('7 - Single Element - Seeking Funding ', async ({ page }) => {
        //Seeking Funding button Visual Test
        await helper.locateAndTakeScreenShot(
            auxFunc, 
            '#nav > div > div > div.nav-right > div.nav-buttons > a.btn.btn-white.btn-nav.w-button', 
            'YL-SeekingFunding.png')
        // const seeking = page.locator('#nav > div > div > div.nav-right > div.nav-buttons > a.btn.btn-white.btn-nav.w-button')
        // expect(await seeking.screenshot()).toMatchSnapshot('YL-SeekingFunding.png');

        //Checking Seeking Funding Page Visual Test
        await page.click('#nav > div > div > div.nav-right > div.nav-buttons > a.btn.btn-white.btn-nav.w-button')

        //? Force wait for 1 sec to have full popup as expected
        await helper.delay(1500)

        await helper.locateAndTakeScreenShot(auxFunc, 'body', 'YL-SeekingF-Page.png')
        // const SeekingFundPage = page.locator('body')
        // expect(await SeekingFundPage.screenshot()).toMatchSnapshot('YL-SeekingF-Page.png');
    })


    test.only('8 - Single Element - Capital ', async ({ page }) => {

        //Company button Visual Test
        await page.keyboard.down('PageDown')
        await helper.locateAndTakeScreenShot(auxFunc, 
            'body > main > section:nth-child(3) > div > div.grid-2-col > div:nth-child(1) > div',
            'YL-Capital-card.png')
        // const capital = await page.locator('body > main > section:nth-child(3) > div > div.grid-2-col > div:nth-child(1) > div')
        // expect(await capital.screenshot()).toMatchSnapshot('YL-Capital-card.png');

        //Company dropdown Visual Test
        await page.click('body > main > section:nth-child(3) > div > div.grid-2-col > div:nth-child(1) > div > div > a')

        await helper.delay(1000)

        await helper.pageScreenShot('YL-capital-page.png')
        // expect(await page.screenshot()).toMatchSnapshot('YL-capital-page.png')
    })

    test('9 - Single Element - Instant Payouts ', async ({ page }) => {

        //Company button Visual Test
        await page.keyboard.down('PageDown')
        const instant = await page.locator('body > main > section:nth-child(3) > div > div.grid-2-col > div:nth-child(2) > div')
        expect(await instant.screenshot()).toMatchSnapshot('YL-InstantPayouts-card.png');

        await helper.delay(1000)

        expect(await page.screenshot()).toMatchSnapshot('YL-InstantPayouts-page.png') 
    })

    test('10 - Single Element - Why partner w/ YouLend Cards', async ({ page }) => {
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

    test('11 - Single Element - Embedded finance', async ({ page }) => {
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
        await helper.delay(1500)

        expect(await page.screenshot()).toMatchSnapshot('YL-EmbbededFinance-page.png')  
    })

    test('12 - Single Element - Less Cash, more possitibily', async ({ page }) => {
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
        await helper.delay(1500)

        expect(await page.screenshot()).toMatchSnapshot('YL-lessCash-whitepaper-page.png')
    })

    test('13 - Single Element - Recent Blog Posts', async ({ page }) => {
        //Company button Visual Test
        for(let i = 0; i < 5; i++) {
            await page.keyboard.down('PageDown');
        }
        const instant = await page.locator('body > main > section:nth-child(8) > div')

        //? Force wait for 1 sec to have full popup as expected
        await helper.delay(1000)

        expect(await instant.screenshot()).toMatchSnapshot('YL-Recent-Blog-Card.png');

        //?No need to check all the buttons because the all route to /use-cases

        //Company dropdown Visual Test
        await page.click('body > main > section:nth-child(8) > div > div.title-block.has-button > a')
        expect(await page.screenshot()).toMatchSnapshot('YL-Recent-Blog-page.png')
    })

    test('14 - Single Element - Book a Demo ', async ({ page }) => {

        //Company button Visual Test
        const book = page.locator('body > main > div.section.hero > div > div > div.hero-content > div')
        expect(await book.screenshot()).toMatchSnapshot('YL-Book-a-Demo.png');

        //Company dropdown Visual Test
        await page.click('body > main > div.section.hero > div > div > div.hero-content > div')
        const bookPage = page.locator('body > div.popup-modal > div')

        //? Force wait for 1 sec to have full popup as expected
        await helper.delay(1000)
        //////
        expect(await bookPage.screenshot()).toMatchSnapshot('YL-Book-a-Demo-Popup.png');


    })

    test('15 - Single Element - Explore the Docs ', async ({ page }) => {

       //Scroll down to find the button
        for(let i = 0; i < 6; i++) {
            await page.keyboard.down('PageDown');
        }
        
        const explore = page.locator('body > main > div.section.cta-banner.blue-banner > div > div > div > a')
        expect(await explore.screenshot()).toMatchSnapshot('YL-Explore-the-docs.png');

        //Company dropdown Visual Test
        await page.click('body > main > div.section.cta-banner.blue-banner > div > div > div > a')

        //? Force wait for 1 sec to have full popup as expected
        await helper.delay(1000)

        expect(await page.screenshot()).toMatchSnapshot('YL-Explore-the-docs-Page.png')
        
    })

    test('16 - Single Element - Contact Page ', async ({ page }) => {

       //Scroll down to find the button
        for(let i = 0; i < 6; i++) {
            await page.keyboard.down('PageDown');
        }
        
        const explore = page.locator('#w-node-ed9ab0e0-cdfa-1189-0d53-2f4272a5c499-72a5c472 > ul > li:nth-child(4) > a')
        expect(await explore.screenshot()).toMatchSnapshot('YL-ContactUs-button.png');

        //Company dropdown Visual Test
        await page.click('#w-node-ed9ab0e0-cdfa-1189-0d53-2f4272a5c499-72a5c472 > ul > li:nth-child(4) > a')
        await helper.delay(1000)
        expect(await page.screenshot()).toMatchSnapshot('YL-ContactUs-Page.png')
        
    })

    test('17 - Single Element - Partners page ', async ({ page }) => {

        //Scroll down to find the button
         for(let i = 0; i < 6; i++) {
             await page.keyboard.down('PageDown');
         }
         
         const explore = page.locator('#w-node-ed9ab0e0-cdfa-1189-0d53-2f4272a5c479-72a5c472 > ul > li:nth-child(2) > a')
         expect(await explore.screenshot()).toMatchSnapshot('YL-Partners-button.png');
 
         //Company dropdown Visual Test
         await page.click('#w-node-ed9ab0e0-cdfa-1189-0d53-2f4272a5c479-72a5c472 > ul > li:nth-child(2) > a')
         await helper.delay(1000)

         //! Need to take screen shot from the whole page
         expect(await page.screenshot()).toMatchSnapshot('YL-Partners-Page.png')
         
     })

     test('18 - Single Element - Merchant page ', async ({ page }) => {

        //Scroll down to find the button
         for(let i = 0; i < 6; i++) {
             await page.keyboard.down('PageDown');
         }
         
         const explore = page.locator('#w-node-ed9ab0e0-cdfa-1189-0d53-2f4272a5c479-72a5c472 > ul > li:nth-child(3) > a')
         expect(await explore.screenshot()).toMatchSnapshot('YL-Merchant-Businesses-button.png');
 
         //Company dropdown Visual Test
         await page.click('#w-node-ed9ab0e0-cdfa-1189-0d53-2f4272a5c479-72a5c472 > ul > li:nth-child(3) > a')
         await helper.delay(1000)
         expect(await page.screenshot()).toMatchSnapshot('YL-Merchant-Page.png')
         
     })


})