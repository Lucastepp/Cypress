import { test, expect, Locator, Page } from "@playwright/test";
import { partnerCredential } from "../backups/partner-dashboard-users-old";
import { VisualHelper } from "./e2e-visual-helper-old";

test.describe("Partner Dashboard Visual Regression", () => {
  let helper: VisualHelper;

  const partners = [
    "justeat",
    // "shopify",
    // "paymentsense",
    // "rms",
    // "dojo",
    // "google",
    // "mastercard",
    // "takepayments",
    // "ebayuk",
    // "kinex",
    // "payu/pl",
    // "swoop",
    // "boloo/nl",
    // "foodhub",
    // "eposnowcapital",
    // "fundingcircle",
    // "hdp", //handepay
    // "paypoint",
    // "tide",
    // "wedoaccounting",
    // "brainpoint-be/be-fr",
  ];

  partners.forEach((partner) => {

     test.beforeEach(async ({ page }) => {
    


      
      helper = new VisualHelper(page)
      // let site = await helper.loadHomePage("staging");
      // await page.goto(site + partner + "/apply/signup");
      
     });

    test.only(
      " 01 - Login In on Partner  = [ " + partner + " ]",
      async ({ page }) => {
        await page.goto(
          "https://staging.youlend.com/apply/" + partner + "/signup"
        );
      

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
        await page.goto(
          "https://staging.youlend.com/apply/" + partner + "/signup"
        );


        expect(page.url()).toContain(`${partner}/signup`);
      }
    );

    test.only(
      " 03 - Printing Login button and Login in on  = [ " + partner + " ]",
      async ({ page }) => {

        await page.goto(
          "https://staging.youlend.com/apply/" + partner + "/signup"
        );
        

        if (partner === "brainpoint-be/be-fr") {
          const loginButton = page.locator(
            "body > app-root > yl-header > mat-toolbar > div > div.user-controls > div.user-account-control"
          );

          helper.delay(500);

          expect(await loginButton.screenshot()).toMatchSnapshot(
            `YL-${partner}Login-Button.png`
          );

          helper.delay(1500);

          await page.click("text=Connexion");
          expect(page.url()).toContain("https://youlend-stag.eu.auth0.com/");

          helper.delay(2000);

          expect(await page.screenshot()).toMatchSnapshot(
            `YL-${partner}Auth0-page.png`
          );
        } else if (partner === "brainpoint-be" || partner === "boloo/nl") {
          const loginButton = page.locator(
            "body > app-root > yl-header > mat-toolbar > div > div.user-controls > div.user-account-control"
          );
          expect(await loginButton.screenshot()).toMatchSnapshot(
            `YL-${partner}Login-Button.png`
          );
          await page.click("text=Inloggen");
          expect(page.url()).toContain("https://youlend-stag.eu.auth0.com/");

          helper.delay(2000);

          expect(await page.screenshot()).toMatchSnapshot(
            `YL-${partner}Auth0-page.png`
          );
        } else if (partner === "payu/pl") {
          const loginButton = page.locator(
            "body > app-root > yl-header > mat-toolbar > div > div.user-controls > div.user-account-control"
          );
          expect(await loginButton.screenshot()).toMatchSnapshot(
            `YL-${partner}Login-Button.png`
          );
          await page.click(
            "body > app-root > yl-header > mat-toolbar > div > div.user-controls > div.user-account-control"
          );
          expect(page.url()).toContain("https://youlend-stag.eu.auth0.com/");

          helper.delay(2000);

          expect(await page.screenshot()).toMatchSnapshot(
            `YL-${partner}Auth0-page.png`
          );
        } else {
          const loginButton = page.locator("text=Loginperson >> span");
          expect(await loginButton.screenshot()).toMatchSnapshot(
            `YL-${partner}Login-Button.png`
          );

          helper.delay(1500);

          await page.click("text=Login");
          expect(page.url()).toContain("https://youlend-stag.eu.auth0.com/");

          helper.delay(2500);

          expect(await page.screenshot()).toMatchSnapshot(
            `YL-${partner}Auth0-page.png`
          );
        }

        switch (partner) {
          case "justeat":
            await partnerCredential("justeat", page);
            
          case "shopify":
            await partnerCredential("shopify", page);
           
          case "paymentsense":
            await partnerCredential("paymentsense", page);
            
          case "rms":
            partnerCredential("rms", page);
            
          case "dojo":
            partnerCredential("dojo", page);
            break;
          case "google":
            partnerCredential("google", page);
            break;
          case "mastercard":
            partnerCredential("mastercard", page);
            break;
          case "takepayments":
            partnerCredential("takepayments", page);
            break;
          case "ebayuk":
            partnerCredential("ebayuk", page);
            break;
          case "kinex":
            partnerCredential("kinex", page);
            break;
          case "payu/pl":
            partnerCredential("payu/pl", page);
            break;
          case "swoop":
            partnerCredential("swoop", page);
            break;
          case "boloo/nl":
            partnerCredential("boloo/nl", page);
            break;
          case "foodhub":
            partnerCredential("foodhub", page);
            break;
          case "eposnowcapital":
            partnerCredential("eposnowcapital", page);
            break;
          case "fundingcircle":
            partnerCredential("fundingcircle", page);
            break;
          case "hdp":
            partnerCredential("hdp", page);
            break;
          case "paypoint":
            partnerCredential("paypoint", page);
            break;
          case "tide":
            partnerCredential("tide", page);
            break;
          case "wedoaccounting":
            partnerCredential("wedoaccounting", page);
            break;
          case "brainpoint-be/be-fr":
            partnerCredential("brainpoint-be/be-fr", page);
            break;

          default:
            throw Error("Partner Not Found!!!!");
        }

        helper.delay(500);

        await page.click(
          "#auth0-lock-container-1 > div > div.auth0-lock-center > form > div > div > div > button > span"
        );

        await page.click("body > div > div > a");

        helper.delay(3500);

        expect(await page.screenshot()).toMatchSnapshot(
          `YL-${partner}-page.png`
        );
      }
    );
  });
});
