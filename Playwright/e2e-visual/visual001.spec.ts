import { test, expect } from '@playwright/test'
import { VisualHelper } from "../e2e-visual/e2e-visual-helper";

let helper: VisualHelper;
let auxFunc;
let i;

test.describe("Visual Regression YouLend Page", () => {

    test.beforeEach(async ({ page }) => {
        helper = new VisualHelper(page)

        await helper.loadHomePage("youlend-webflow")
        //Closing cookies pop-up // default delay afterwards is 1000ms
        await helper.closeCookiesProd()
      });

    test('0 - Full Page Snapshot', async ({ page }) => {
        await helper.pageScreenShot('0 - youlend-homepage.png')
    })

    test('1 - Single Element - YL Logo', async ({ page }) => {
        //Logo Visual Test
        await helper.locateAndTakeScreenShot(auxFunc, '#nav > div > div > div.nav-left > a > img', '1 - YL-logo.png')
    })

    test('2 - Single Element - Products ', async ({ page }) => {
        //Products button Visual Test
        await helper.locateAndTakeScreenShot(auxFunc, '#w-dropdown-toggle-0', '2 - YL-products.png')

        //Products Dropdown Visual Test
        await page.click('#w-dropdown-toggle-0 > div')
        await helper.locateAndTakeScreenShot(auxFunc, '#w-dropdown-list-0', '2 - YL-prod-dropdown.png')

        //? Dropdown OVERVIEW
        await helper.clickAndExpect('#w-dropdown-list-0 > div.dropdown-inner > div.dropdown-menu > a:nth-child(2)', "/products-overview")

         //? Dropdown CAPITAL
        await helper.hoverClickAndExpect('#w-dropdown-toggle-0 > div',
         '#w-dropdown-list-0 > div.dropdown-inner > div.dropdown-menu > a:nth-child(3) > div',
          "/products/capital")

         //? Dropdown INSTANT PAYOUTS
         await helper.hoverClickAndExpect('#w-dropdown-toggle-0 > div',
         '#w-dropdown-list-0 > div.dropdown-inner > div.dropdown-menu > a:nth-child(4) > div',
         "/products/instant-payouts")
    })

    test('3 - Single Element - Use Cases ', async ({ page }) => {
        //Use Cases button Visual Test
        await helper.locateAndTakeScreenShot(auxFunc, '#w-dropdown-toggle-1', '3 - YL-UseCases.png')

        //Use Cases dropdown Visual Test
        await page.click('#w-dropdown-toggle-1')
        await helper.locateAndTakeScreenShot(auxFunc, '#w-dropdown-list-1', '3 - YL-UseCases-dropdown.png')

        //* Dropdown USE CASES
        //await page.click('#w-dropdown-toggle-1')
        await helper.clickAndExpect('#w-dropdown-list-1 > div.dropdown-inner > div.dropdown-menu > a:nth-child(2)', "/use-cases-overview")

         //? Dropdown PAYMENT SERVICE PROVIDERS
         await helper.hoverClickAndExpect('#w-dropdown-toggle-1 > div',
         '#w-dropdown-list-1 > div.dropdown-inner > div.dropdown-menu > a:nth-child(3) > div',
         "/use-cases/payment-service-providers")

         //? Dropdown E-COMMENCE & TECH
         await helper.hoverClickAndExpect('#w-dropdown-toggle-1 > div',
         '#w-dropdown-list-1 > div.dropdown-inner > div.dropdown-menu > a:nth-child(4) > div',
         "/use-cases/ecommerce-and-tech")

         //? Dropdown BROKERS
         await helper.hoverClickAndExpect('#w-dropdown-toggle-1 > div',
         '#w-dropdown-list-1 > div.dropdown-inner > div.dropdown-menu > a:nth-child(5) > div',
         "/use-cases/brokers")

          //? Dropdown BANKS
          await helper.hoverClickAndExpect('#w-dropdown-toggle-1 > div',
         '#w-dropdown-list-1 > div.dropdown-inner > div.dropdown-menu > a:nth-child(6) > div',
         "/use-cases/banks")
    })

    test('4 - Single Element - Resources ', async ({ page }) => {
        //Resources button Visual Test
        await helper.locateAndTakeScreenShot(auxFunc, '#w-dropdown-toggle-2', '4 - YL-Resources.png')
        //Resources dropdown Visual Test
        await page.click('#w-dropdown-toggle-2')
        await helper.locateAndTakeScreenShot(auxFunc, '#w-dropdown-list-2', ' 4 - YL-Resources-dropdown.png')

        //* Dropdown RESOURCES
        //? Dropdown OVERVIEW
        await helper.clickAndExpect('#w-dropdown-list-2 > div.dropdown-inner > div.dropdown-menu > a:nth-child(2)', "/resources-overview")

         //? Dropdown partner case studies overview
         await helper.clickClickAndExpect('#w-dropdown-toggle-2 > div',
         '#w-dropdown-list-2 > div.dropdown-inner > div.dropdown-menu > a:nth-child(3) > div',
         "/partner-case-studies-overview")

        //? Dropdown Blog
        await helper.hoverClickAndExpect('#w-dropdown-toggle-2 > div',
         '#w-dropdown-list-2 > div.dropdown-inner > div.dropdown-menu > a:nth-child(4) > div',
         "/blog-overview")

        //? Dropdown FAQS
        await helper.hoverClickAndExpect('#w-dropdown-toggle-2 > div',
         '#w-dropdown-list-2 > div.dropdown-inner > div.dropdown-menu > a:nth-child(5) > div',
         "/resources/faqs")
    })

    test('5 - Single Element - Company ', async ({ page }) => {
        //Company button Visual Test
        await helper.locateAndTakeScreenShot(auxFunc, '#w-dropdown-toggle-3', '5 - YL-Company.png')

        //Company dropdown Visual Test
        await page.click('#w-dropdown-toggle-3')
        await helper.locateAndTakeScreenShot(auxFunc, '#w-dropdown-list-3', '5 - YL-company-dropdown.png')

        //* Dropdown COMPANY
        //? Dropdown OVERVIEW
        await helper.clickAndExpect('#w-dropdown-list-3 > div.dropdown-inner > div.dropdown-menu > a:nth-child(2)', "/company-overview")

        //? Dropdown GLOBAL COVERAGE
        await helper.clickClickAndExpect('#w-dropdown-toggle-3 > div','#w-dropdown-list-3 > div.dropdown-inner > div.dropdown-menu > a:nth-child(3) > div',
        "/company/global-coverage")

        //? Dropdown CONTACT
        await helper.hoverClickAndExpect('#w-dropdown-toggle-3 > div','#w-dropdown-list-3 > div.dropdown-inner > div.dropdown-menu > a:nth-child(5) > div',
         "/company/contact")

        //!Need to check how to check URL when opening new window >>
        //? Dropdown CAREERS - INVERTED WITH LAST DROPDOWN OPTION BECAUSE CAREERS BRINGS US TO LINKEDIN PAGE
        //await page.hover('#w-dropdown-toggle-3 > div')
        //await page.click('#w-dropdown-list-3 > div.dropdown-inner > div.dropdown-menu > a:nth-child(4) > div')
        //expect(page.url()).toContain("https://www.linkedin.com/company/youlend/jobs/")
    })

    test('6 - Single Element - Login ', async ({ page }) => {
        //Login button Visual Test
        await helper.locateAndTakeScreenShot(
            auxFunc, '#nav > div > div > div.nav-right > div.nav-buttons > a.btn.btn-white__ghost.btn-nav.w-button', 
            '6 - YL-LoginButton.png')

        await page.click('#nav > div > div > div.nav-right > div.nav-buttons > a.btn.btn-white__ghost.btn-nav.w-button')
        expect(page.url()).toContain("https://youlend.com/apply/dashboard/login");
        await helper.delay(3500);
        await helper.pageScreenShot(`6 - YL-Auth0-page.png`)
    })
    
    test('7 - Single Element - Seeking Funding ', async ({ page }) => {
        //Seeking Funding button Visual Test
        await helper.locateAndTakeScreenShot(
            auxFunc, '#nav > div > div > div.nav-right > div.nav-buttons > a.btn.btn-white.btn-nav.w-button', 
            '7 - YL-SeekingFunding.png')
        //Checking Seeking Funding Page Visual Test
        await page.click('#nav > div > div > div.nav-right > div.nav-buttons > a.btn.btn-white.btn-nav.w-button')
        await helper.delay(1500)
        await helper.locateAndTakeScreenShot(auxFunc, 'body', '7 - YL-SeekingF-Page.png')
    })


    test('8 - Single Element - Capital ', async ({ page }) => {
        //Company button Visual Test
        await helper.pageDown()
        await helper.locateAndTakeScreenShot(auxFunc, 'body > main > section:nth-child(3) > div > div.grid-2-col > div:nth-child(1) > div',
            '8 - YL-Capital-card.png')

        //Company dropdown Visual Test
        await page.click('body > main > section:nth-child(3) > div > div.grid-2-col > div:nth-child(1) > div > div > a')
        await helper.delay(1000)
        await helper.pageScreenShot('8 - YL-capital-page.png')
    })

    test('9 - Single Element - Instant Payouts ', async ({ page }) => {
        //Company button Visual Test
        await helper.pageDown()
        await helper.locateAndTakeScreenShot(auxFunc, 'body > main > section:nth-child(3) > div > div.grid-2-col > div:nth-child(2) > div',
             '9 - YL-InstantPayouts-card.png')

        await helper.delay(1000)
        await helper.pageScreenShot('9 - YL-InstantPayouts-page.png')
    })

    test('10 - Single Element - Why partner w/ YouLend Cards', async ({ page }) => {
        //Company button Visual Test
        await helper.pageDown(2)
        await helper.locateAndTakeScreenShot(auxFunc, 'body > main > section:nth-child(4) > div',
            '10 - YL-Why-partner-cards.png')

        //Company dropdown Visual Test
        await page.click('#w-node-_06f7f875-6196-adb6-a649-8a97c10d5dfc-c10d5dda > div > div > a')
        await helper.delay(1500)
        await helper.pageScreenShot('10 - YL-Use-cases-page.png') 
    })

    test('11 - Single Element - Embedded finance', async ({ page }) => {
        //Company button Visual Test
        await helper.pageDown(3)
        await helper.locateAndTakeScreenShot(auxFunc, 'body > main > section:nth-child(5) > div > div', '11 - YL-Embedded finance card.png')

        //Company dropdown Visual Test
        await page.click('#w-node-_91a2e957-94d5-4799-2fca-b4d736a54c04-36a54bff > div > a')
        await helper.delay(1500)
        await helper.pageScreenShot('11 - YL-EmbbededFinance-page.png')
    })

    test('12 - Single Element - Less Cash, more possitibily', async ({ page }) => {
        //Company button Visual Test
        await helper.pageDown(4)
        await helper.locateAndTakeScreenShot(auxFunc,
            'body > main > section.section.white > div',
            '12 - YL-Less-cash-card.png')

        //Company dropdown Visual Test
        await page.click('#w-node-_050e9792-cdd7-9df1-c39b-9b440b7570a3-0b7570a0 > div > a')
        await helper.delay(1500)
        await helper.pageScreenShot('12 - YL-lessCash-whitepaper-page.png')

    })

    test('13 - Single Element - Recent Blog Posts', async ({ page }) => {
        //Company button Visual Test
        await helper.pageDown(5)
        await helper.locateAndTakeScreenShot(auxFunc,
            'body > main > section:nth-child(8) > div',
            '13 - YL-Recent-Blog-Card.png')                               

        //Company dropdown Visual Test
        await page.click('body > main > section:nth-child(8) > div > div.title-block.has-button > a')
        await helper.delay(1500)
        await helper.pageScreenShot('13 - YL-Recent-Blog-page.png')
      
    })

    test('14 - Single Element - Book a Demo ', async ({ page }) => {
        //Company button Visual Test
        await helper.locateAndTakeScreenShot(auxFunc,
            'body > main > div.section.hero > div > div > div.hero-content > div',
            '14 - YL-Book-a-Demo.png')
        //Company dropdown Visual Test
        await page.click('body > main > div.section.hero > div > div > div.hero-content > div')
        await helper.locateAndTakeScreenShot(auxFunc, 'body > div.popup-modal > div', '14 - YL-Book-a-Demo-Popup.png') 
        
    })

    test('15 - Single Element - Explore the Docs ', async ({ page }) => {
       //Scroll down to find the button
        await helper.pageDown(6)
        await helper.locateAndTakeScreenShot(auxFunc, 'body > main > div.section.cta-banner.blue-banner > div > div > div > a',
            '15 - YL-Explore-the-docs.png')

        //Company dropdown Visual Test
        await page.click('body > main > div.section.cta-banner.blue-banner > div > div > div > a')
        await helper.delay(1500)
        await helper.pageScreenShot('15 - YL-Explore-the-docs-Page.png')
    })

    test('16 - Single Element - Contact Page ', async ({ page }) => {
       //Scroll down to find the button
        await helper.pageDown(6)
        await helper.locateAndTakeScreenShot(auxFunc, '#w-node-ed9ab0e0-cdfa-1189-0d53-2f4272a5c499-72a5c472 > ul > li:nth-child(4) > a',
            '16 - YL-ContactUs-button.png')

        //Company dropdown Visual Test
        await page.click('#w-node-ed9ab0e0-cdfa-1189-0d53-2f4272a5c499-72a5c472 > ul > li:nth-child(4) > a')
        await helper.delay(1000)
        await helper.multipleScreenShot('16 - YL-ContactUs-Page', 2)
    })

    test('17 - Single Element - Partners page ', async ({ page }) => {
       
         await helper.pageDown(6)
         await helper.locateAndTakeScreenShot(auxFunc, '#w-node-ed9ab0e0-cdfa-1189-0d53-2f4272a5c499-72a5c472 > ul > li:nth-child(2) > a',
            '17 - YL-Partners-button.png')

         //Company dropdown Visual Test
         await page.click('#w-node-ed9ab0e0-cdfa-1189-0d53-2f4272a5c479-72a5c472 > ul > li:nth-child(2) > a')
         await helper.delay(1000)

         await helper.multipleScreenShot('17 - YL-Partners-Page', 4)
     })

     test('18 - Single Element - Merchant page ', async ({ page }) => {
        
         await helper.pageDown(6)
         await helper.locateAndTakeScreenShot(auxFunc,'#w-node-ed9ab0e0-cdfa-1189-0d53-2f4272a5c499-72a5c472 > ul > li:nth-child(3) > a',
          '18 - YL-Merchant-Businesses-button.png')
     
         //Company dropdown Visual Test
         await page.click('#w-node-ed9ab0e0-cdfa-1189-0d53-2f4272a5c479-72a5c472 > ul > li:nth-child(3) > a')
         await helper.delay(1000)
         await helper.multipleScreenShot('18 - YL-Merchant-Page', 6)
     })
})