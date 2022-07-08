import test, { expect, Locator, Page } from "@playwright/test";
import { PartnerDashboard } from "../partner-dashboard-users";
import { VisualHelper } from "./e2e-visual-helper";

let helper: VisualHelper;
let partnerClass: PartnerDashboard;


test.describe("Partner Dashboard Visual Regression", () => {
 
  const jubilee = [
    "dashboard",
    "google",
    "loanguru",
    "dojo",
    "inspirepayments",
    "rms",
    "shopify",
    "paymentsense",
    "brainpoint-be/be-fr",
    "boloo/be-fr",
    "foodhub",
    "kinex",
    "fundingcircle",
    "payu/pl",
    "justeat",
    "tide",
    "paypoint",
    "swoop",
    "hdp",
    "wedoaccounting",
    "eposnowcapital"

  ]

  //* Make sure to change environment on forEach Loop below >>

   jubilee.forEach((partner) => {

    test.beforeEach(async ({ page }) => {
    helper = new VisualHelper(page)
    partnerClass = new PartnerDashboard(page)
     });

    test(
      " 01 - Login In on Partner  = [ " + partner + " ]",
      async ({ page }) => {

        await helper.loadEnv(partner, "jubilee")

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

        await helper.loadEnv(partner, "jubilee")

        helper.delay(2000);
        expect(page.url()).toContain(`${partner}/signup`);
      }
    );

    test(
      " 03 - Printing Login button and Login in on  = [ " + partner + " ]",
      async ({ page }) => {

        await helper.loadEnv(partner, "jubilee")

        //*.............................................
        await helper.languageCheck(partner, "youlend-dev");
        helper.delay(2000);

        await partnerClass.partnerCredentialJubilee(partner);
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