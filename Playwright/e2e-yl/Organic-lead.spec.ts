import test, { expect, Locator, Page } from "@playwright/test";
import { VisualHelper } from "../e2e-visual/e2e-visual-helper";

let page: Page;
let helper: VisualHelper;
let emailCount = 1001;
export const email = `lucas.pinto+0${emailCount}@youlend.com`;

test.describe.serial("Partner Dashboard Visual Regression", () => {
  //* Make sure to change environment on forEach Loop below >>

  do {
    test.beforeAll(async ({ browser }) => {

      page = await browser.newPage();
      helper = new VisualHelper(page);
      await helper.loadHomePage("signup-jubilee");
      await helper.closeCookiesJub()
    });

    test.beforeEach(async ({ }) => {
      helper = new VisualHelper(page);
    });

    test(" 01 - Signup Page", async ({ }) => {
      expect(page.url()).toContain(`/signup`);
      await page.locator('input[name="name"]').fill("Lucas");
      await page.locator('input[name="tel"]').fill("07503056563");
      await page.locator('input[name="email"]').fill(email);
      await page.locator('input[name="password"]').fill("Password1!");
      await page.locator('button[type="submit"]').click();
      await helper.delay(10000)
      //await page.click('button[type="submit"]');

      helper.alreadyExist()
      await helper.delay(2000)
    });

    test(" 02 - Getting Started", async ({}) => {
      await helper.delay(3000)
      expect(page.url()).toContain(`/gettingstarted`);
      await page.locator(".mat-button-wrapper").click();
    });

    test(" 03 - Company Details", async ({  }) => {
      expect(page.url()).toContain(`/companydetails`);
      await page.locator("#mat-select-value-1").click;

      const locator = page.locator("#mat-select-value-1");
      await expect(locator).toContainText("United Kingdom");
      await expect(locator).toContainText("Belgium");
      await expect(locator).toContainText("Germany");
      await expect(locator).toContainText("Ireland");
      await expect(locator).toContainText("Netherlands");
      await expect(locator).toContainText("Poland");
      await expect(locator).toContainText("Spain");

      const companyType = page.locator("#mat-select-value-3 > span");
      await expect(companyType).toContainText("Ltd");
      await expect(companyType).toContainText("PLC");
      await expect(companyType).toContainText("LLP");
      await expect(companyType).toContainText("Sole Trader");
      await expect(companyType).toContainText("Partnership");

      await page.locator("#mat-select-value-3 > span").click;
      await page.locator("#mat-option-10 > span").click;

      await page
        .locator('input[formcontrolname="companyName"]')
        .fill(`Test${emailCount}`);
      await page.locator('input[formcontrolname="businessAddress"]').fill(`w2`);
      await page.locator("#cc_c2a > ul > li:nth-child(1) > div > span.light").click;
      await page.locator("#cc_c2a > ul > li:nth-child(1) > div > span.light").click;

      await page.locator("#cc_c2a > ul > li:nth-child(1) > div > span.light").click;
    });

    test(" 04 - Personal Details", async ({ }) => {
      expect(page.url()).toContain(`/personaldetails`);

      await page.locator('input[formcontrolname="lastName"]').fill(`Pinto`);

      await page.locator('input[data-placeholder="DD"]').fill(`23`);

      await page.locator('input[data-placeholder="MM"]').fill(`12`);

      await page.locator('input[data-placeholder="YYYY"]').fill(`1985`);


      await page.locator('#address-search-0').fill(`w2`);
      await page.locator("#cc_c2a > ul > li:nth-child(1) > div > span:nth-child(1)").click;
      await page.locator("#cc_c2a > ul > li:nth-child(1) > div > span.light").click;

      await page.locator("body > app-root > div > div > div.main-content > app-owners-directors > div > button > span.mat-button-wrapper > span").click;
        
    });

    test(" 05 - Financial information", async ({}) => {
        expect(page.url()).toContain(`/financialinformation`);
  
        await page.locator("#mat-checkbox-1 > label > span.mat-checkbox-inner-container").click;
        await page.locator("input[type=file]").setInputFiles("./data/May 2019- April 2020.pdf")

        await page.locator("body > app-root > div > div > div.main-content > yl-financial-information > section > div.d-flex > div > button > span.mat-button-wrapper > span").click;
        
      });



    emailCount++;
  } while (emailCount == 1100);
});
