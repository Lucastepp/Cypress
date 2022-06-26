import { test, expect } from '@playwright/test'
import { HomePage } from '../page-objects/HomePage'
import { FeedbackPage } from '../page-objects/FeedbackPage'


test.describe('Feedback Form', () => {

    let homePage: HomePage
    let feedbackPage: FeedbackPage

    test.beforeEach(async ({ page }) => {
        
        homePage = new HomePage(page)
        feedbackPage = new FeedbackPage(page)

        //await page.goto('http://zero.webappsecurity.com/index.html')
        //await page.click('#feedback')

        await homePage.visit()
        await homePage.clickOnFeedbackLink()
    })

    // reset feedback form
    test('Reset Feedback Form', async ({ page }) => {

        await feedbackPage.fillForm(
            'name',
            'email@email.com',
            'subject',
            'my awesome message'
        )

        await feedbackPage.resetForm()
        await feedbackPage.assertReset()

        // await page.type('#name', 'some name')
        // await page.type('#email', 'some email')
        // await page.type('#subject', 'some subject')
        // await page.type('#comment', 'some comment about the application')
        // await page.click("input[name='clear']")

        // const nameInput = await page.locator('#name')
        // const commentInput = await page.locator('#comment')
        // await expect(nameInput).toBeEmpty()
        // await expect(commentInput).toBeEmpty()
    })


    // submit feedback form
    test('Submit Feedback form', async({ page }) => {
       
        await feedbackPage.fillForm(
            'name',
            'email@email.com',
            'subject',
            'my awesome message'
        )

        await feedbackPage.submitForm()
        await feedbackPage.feedbackFormSent()
        
        // await page.type('#name', 'some name')
        // await page.type('#email', 'some email')
        // await page.type('#subject', 'some subject')
        // await page.type('#comment', 'some comment about the application')
        // await page.click("input[type='submit']")
        // await page.waitForSelector('#feedback-title')
    })
})