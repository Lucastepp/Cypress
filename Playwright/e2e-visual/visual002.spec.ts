import test, { expect, Locator, Page } from "@playwright/test";
import { PartnerDashboard } from "../partner-dashboard-users";
import { VisualHelper } from "../e2e-visual/e2e-visual-helper";


let helper: VisualHelper;
let partnerClass: PartnerDashboard;


test.describe("Partner Dashboard Visual Regression", () => {
  const partners = [
    "justeat",
    "shopify",
    "paymentsense",
    "rms",
    "dojo",
    "google",
    "mastercard",
    "takepayments",
    "ebayuk",
    "kinex",
    "payu/pl",
    "swoop",
    "boloo/nl",
    "foodhub",
    "eposnowcapital",
    "fundingcircle",
    "hdp", //handepay
    "paypoint",
    "tide",
    "wedoaccounting",
    "brainpoint-be/be-fr",
  ];

   partners.forEach((partner) => {

    test.beforeEach(async ({ page }) => {
    helper = new VisualHelper(page)
    partnerClass = new PartnerDashboard(page)
     });

    test(
      " 01 - Login In on Partner  = [ " + partner + " ]",
      async ({ page }) => {

        await helper.loadEnv(page, partner, "staging")
       
        await page.click("body > div > div > a");
        helper.delay(2000);

        expect(await page.screenshot()).toMatchSnapshot(
          `YL-${partner}Signup-Landing-page.png`
        );
      }
    );

    test(
      " 02 - Checking page of Partner  = [ " + partner + " ]",
      async ({ page }) => {

        helper.loadEnv(page, partner, "staging")
   
        expect(page.url()).toContain(`${partner}/signup`);
      }
    );

    test(
      " 03 - Printing Login button and Login in on  = [ " + partner + " ]",
      async ({ page }) => {

        await helper.loadEnv(page, partner, "staging")
       
        //*.............................................
      
        await helper.languageCheck(partner, page)
     
        await partnerClass.partnerCredential(partner);

        helper.delay(2000);

        await page.click(
          "#auth0-lock-container-1 > div > div.auth0-lock-center > form > div > div > div > button > span"
        );

        await page.click("body > div > div > a"); 

        expect(await page.screenshot()).toMatchSnapshot(
          `YL-${partner}-page.png`
        );
      }
    );
  });
});




 // helper = new VisualHelper(page)
        // let site = await helper.loadHomePage("staging");
        // await page.goto(site + partner + "/signup");

        //