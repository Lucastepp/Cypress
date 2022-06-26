import { test, expect } from "@playwright/test";
import { HomePage } from '../page-objects/HomePage'
import { LoginPage } from '../page-objects/LoginPage'
import { PaymentPage } from '../page-objects/PaymentPage'
import { Navbar } from '../page-objects/componets/Navbar'

test.describe("New Payment", () => {

  let homePage: HomePage
  let loginPage: LoginPage
  let paymentPage: PaymentPage
  let navbar: Navbar

  //? login
  test.beforeEach(async ({ page }) => {
    
    homePage = new HomePage(page)
    loginPage = new LoginPage(page)
    paymentPage = new PaymentPage(page)
    navbar = new Navbar(page)

    await homePage.visit()
    await homePage.clickOnSignIn()
    await loginPage.login('username', 'password')

    //? There is an error in the website so we need to call again goto
    await page.goto("http://zero.webappsecurity.com/index.html");
    await page.click('#online-banking')
  });

  test("Should send new payment", async ({ page }) => {
    
    navbar.clickOnTab('Pay Bills')
    await paymentPage.createPayment()
    await paymentPage.assertSuccessMessage()

    //? Non Refactored code
    //await page.click('#pay_bills_link')
    // await page.selectOption('#sp_payee', 'apple')
    // await page.click('#sp_get_payee_details')
    // await page.waitForSelector('#sp_payee_details')
    // await page.selectOption('#sp_account', '6')
    // await page.type('#sp_amount', '5000')
    // await page.type('#sp_date', '2021-11-09')
    // await page.type('#sp_description', 'some random message')
    // await page.click('#pay_saved_payees')
    
    // const message = await page.locator('#alert_content > span')
    // await expect(message).toBeVisible()
    // await expect(message).toContainText('The payment was successfully submitted')
  });
});
