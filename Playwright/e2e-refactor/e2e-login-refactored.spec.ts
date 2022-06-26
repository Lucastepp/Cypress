import { test, expect } from '@playwright/test'
import { LoginPage } from '../page-objects/LoginPage'
import { HomePage } from '../page-objects/HomePage'

test.describe('Login / Logout Flow', () => {

    let loginPage: LoginPage;
    let homePage: HomePage;

    //before hook
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        homePage = new HomePage(page);

        await homePage.visit()
        //await page.goto('http://zero.webappsecurity.com/')
    })

    //negative scenario
    test("Negative scenario for login", async ({ page }) => {

        //await page.click('#signin_button')
        await homePage.clickOnSignIn()
        await loginPage.login('invalid username', 'invalid password')
        await loginPage.wait(3000)
        await loginPage.assertErrorMessage()


        //* Non refactored code
        //? await page.type('#user_login', 'invalid username')
        //? await page.type('#user_password', 'invalid password')
        //? await page.click('text=Sign in')

        //?const errorMessage = await page.locator(".alert-error");
        //?await expect(errorMessage).toContainText("Login and/or password are wrong.");
    
    })

    //positive scenario + Logout
    test("Positive Scenario for login + logout", async ({ page }) => {

        //await page.click('#signin_button')
        await homePage.clickOnSignIn()
        await loginPage.login('username', 'password')

        //* Non refactored code
        //? await page.type('#user_login', 'username')
        //? await page.type('#user_password', 'password')
        //? await page.click('text=Sign in')

        //using goto again because website is not routing after login
        await page.goto('http://zero.webappsecurity.com/bank/account-summary.html')
        await expect(page.locator('#account_summary_tab > a'))
        .toBeVisible();

        await page.goto('http://zero.webappsecurity.com/logout.html')
        await expect(page).toHaveURL('http://zero.webappsecurity.com/index.html')

    })
})

