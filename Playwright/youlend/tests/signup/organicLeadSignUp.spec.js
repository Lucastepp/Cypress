const { test } = require('../../../fixtures');
const { expect, request } = require('@playwright/test');
const { webkit } = require('@playwright/test');
const customfunctions = require('../../functions/custom');
const config = require('../../../playwright.config');
const { use } = require('../../../playwright.config');
let useremail;


test('Onboarding SignUp Page - Dashboard UK', async ({ page, isMobile }) => {

    //const browser = await webkit.launch({ headless: false, slowMo: 200 })
    //page = await browser.newPage();

    await page.goto('apply/dashboard/signup');

    if (isMobile) {
        useremail = 'pwmobile'
        await customfunctions.fillForm(page, useremail)
    } else {
        useremail = 'pwdesktop'
        await customfunctions.fillForm(page, useremail)
    }

});


test('Delete Lead / User', async ({ request, page, isMobile }) => {

    if (isMobile) {
        useremail = 'pwmobile'
        await customfunctions.getUserLeadAndDelete(request, useremail)
    } else {
        useremail = 'pwdesktop'
        await customfunctions.getUserLeadAndDelete(request, useremail)
    }

});