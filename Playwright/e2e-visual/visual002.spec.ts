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

        await helper.loadEnv(partner, "staging")
       
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

        await helper.loadEnv(partner, "staging")

        helper.delay(2000);
        expect(page.url()).toContain(`${partner}/signup`);
      }
    );

    test(
      " 03 - Printing Login button and Login in on  = [ " + partner + " ]",
      async ({ page }) => {

        await helper.loadEnv(partner, "staging")
        //*.............................................

        await helper.languageCheck(partner);
        helper.delay(2000);
        
        await partnerClass.partnerCredential(partner);

        await helper.auth0screenShot(partner)

        await helper.clickToLogin()

        await helper.closePopup()
        helper.delay(2500);

        await helper.partnerPageScreenShot(partner)
       
      }
    );
  });
});




 // helper = new VisualHelper(page)
        // let site = await helper.loadHomePage("staging");
        // await page.goto(site + partner + "/signup");

        //