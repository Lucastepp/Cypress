const { test } = require('../../fixtures');
const { request, expect } = require('@playwright/test');
const config = require('../../playwright.config');
const data = require('../../site.config');

let env = config.use.baseURL.slice(8).split('.')[0]

async function fillForm(page, useremail) {

    await page.locator('text=Okay', { timeout: 10000 }).click();
    await page.locator('input[name="name"]').fill('Automation');

    await visualCheck(page, 'landing.png')

    console.log('create user: ' + useremail)

    await page.locator('[placeholder="\\37 400 123456"]').fill('7654345654');
    await page.locator('input[name="email"]').fill('moqatest1987+' + useremail + '@gmail.com');
    await page.locator('input[name="password"]').fill('safepassword');
    await Promise.all([
        page.waitForNavigation(/*{ url: 'https://jubilee.dev-youlend.com/apply/dashboard/gettingstarted' }*/),
        page.locator('button:has-text("Get startedarrow_forward")').click()
    ]);
    await page.locator('button:has-text("Get startedarrow_forward")').click()

    await page.locator('#mat-select-value-3 span').click();
    // Click text=Sole Trader
    await page.locator('text=Sole Trader').click();
    await page.locator('input[role="combobox"]').click();
    await page.locator('input[role="combobox"]').fill('Test');
    await page.locator('text=Business addresssearch >> input[type="text"]').click();
    await page.locator("//strong[normalize-space()='Fill it in manually']").click();
    await page.locator("//*[@formcontrolname='addressLine1']").fill('4 Test Close ');
    await page.locator("//*[@formcontrolname='postcode']").fill('GU31 4LH');
    await page.locator("//*[@formcontrolname='city']").fill('Petersfield');

    await visualCheck(page, 'companydetails.png')

    await Promise.all([
        page.waitForNavigation(/*{ url: 'https://jubilee.dev-youlend.com/apply/dashboard/ownersdirectors' }*/),
        page.locator('button:has-text("Next steparrow_forward")').click()
    ]);
    await page.locator('#mat-input-11').click();
    await page.locator('#mat-input-11').fill('Playwright');
    await page.locator('[placeholder="DD"]').click();
    await page.locator('[placeholder="DD"]').fill('31');
    await page.locator('[placeholder="MM"]').fill('08');
    await page.locator('[placeholder="YYYY"]').fill('1987');
    await page.locator("//strong[normalize-space()='Fill it in manually']").click();
    // Fill [placeholder="Start typing address or postcode"]
    await page.locator("//*[@formcontrolname='country']").fill('United King');
    await page.locator("//span[@class='mat-option-text']").click();
    await page.locator("//*[@formcontrolname='addressLine1']").fill('4 Test Close ');
    await page.locator("//*[@formcontrolname='postcode']").fill('GU31 4LH');
    await page.locator("//*[@formcontrolname='city']").fill('Petersfield');

    // Click button:has-text("Next steparrow_forward")
    await Promise.all([
        page.waitForNavigation(/*{ url: 'https://jubilee.dev-youlend.com/apply/dashboard/financialinformation' }*/),
        page.locator('button:has-text("Next steparrow_forward")').click()
    ]);


    await visualCheck(page, 'financialinformation.png')

    await page.locator('text=I prefer to manually upload documents (slower processing)').click();


    const mobupload = await page.$('text=Upload statements');
    if (mobupload) {
        console.log('Mobile upload view')
        const [fileChooser] = await Promise.all([
            // It is important to call waitForEvent before click to set up waiting.
            page.waitForEvent('filechooser'),
            // Opens the file chooser.
            await page.locator('text=Upload statements').click(),
            //await page.locator('//*/div/input').click(),
        ]);
        await fileChooser.setFiles('Vdd - YouLend Advance Loan Agreement.pdf');
        await customdelay(10000)
    } else {
        console.log('Desktop upload view')
        const [fileChooser] = await Promise.all([
            // It is important to call waitForEvent before click to set up waiting.
            page.waitForEvent('filechooser'),
            // Opens the file chooser.
            await page.locator('//*/div/input').click(),
        ]);
        await fileChooser.setFiles('Vdd - YouLend Advance Loan Agreement.pdf');
        await customdelay(10000)
    }


    // Click button:has-text("Submit applicationarrow_forward")
    await page.locator('button:has-text("Submit applicationarrow_forward")', { timeout: 20000 }).click();
    // Click mat-dialog-container[role="dialog"] button:has-text("Submit")
    await Promise.all([
        page.waitForNavigation(/*{ url: 'https://jubilee.dev-youlend.com/apply/dashboard/thankyou' }*/),
        await customdelay(1000),
        page.locator('mat-dialog-container[role="dialog"] button:has-text("Submit")').click()
    ]);

    await customdelay(2000)
    await visualCheck(page, 'submitted.png')

    await expect(page.locator('text=Thank you!Your offers are on their way.')).toHaveText('Thank you!Your offers are on their way.');

    await visualCheck(page, 'thankyou.png')

}
exports.fillForm = fillForm;

async function getInternalToken(request) {

    let posturl = data[env].url;
    let realm = data[env].realm;
    let clientId = data[env].client_id;
    let audience = data[env].audience;
    let geturl = data[env].customerUserUrl;

    const internaltoken = await request.post(posturl, {
        data: {
            realm: realm,
            client_id: clientId,
            scope: 'openid profile email',
            audience: audience,
            grant_type: 'http://auth0.com/oauth/grant-type/password-realm',
            username: 'youlend.test.automation@gmail.com',
            password: 'W0rdP@551!'
        }
    });
    const resp = await internaltoken.json()
    // console.log(resp.access_token)
    return resp.access_token

}
exports.getInternalToken = getInternalToken;


async function getUserLeadAndDelete(request, useremail) {

    //console.log('env : ' + env)

    console.log('delete user : ' + useremail)

    let geturl = data[env].customerUserUrl;
    let delurl = data[env].yliDelApiUrl;

    const getUserId = await request.get(geturl + '?Count=10&Index=0&SearchFilter=' + useremail + '&UseSearchFilter=true', {
        headers: {
            Authorization: 'Bearer ' + await getInternalToken(request),
            contentType: 'application/json',
        },
    });

    const resp2 = await getUserId.json()
    console.log(resp2[0].UserId)


    const deleteUserId = await request.delete(geturl + '/' + resp2[0].UserId, {
        headers: {
            Authorization: 'Bearer ' + await getInternalToken(request),
            contentType: 'application/json',
        },
    });

    const deleteLeadId = await request.delete(delurl + '/' + resp2[0].LeadId, {
        headers: {
            Authorization: 'Bearer ' + await getInternalToken(request),
            contentType: 'application/json',
        },
    });
}
exports.getUserLeadAndDelete = getUserLeadAndDelete;


async function customdelay(duration) {
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
    await delay(duration)
}


async function visualCheck(page, filename) {
    expect(await page.screenshot()).toMatchSnapshot(filename, {
        maxDiffPixels: 27, // allow no more than 27 different pixels.
    });
}