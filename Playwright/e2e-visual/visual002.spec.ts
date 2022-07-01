import test, { expect, Locator, Page } from "@playwright/test";
import { partnerCredential } from '../partner-dashboard-users'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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
    test(
      " 01 - Login In on Partner  = [ " + partner + " ]",
      async ({ page }) => {
        await page.goto(
          "https://staging.youlend.com/apply/" + partner + "/signup"
        );

        
        await page.click("body > div > div > a");
        await delay(2000);



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

    test(
      " 03 - Printing Login button and Login in on  = [ " + partner + " ]",
      async ({ page }) => {
        await page.goto(
          "https://staging.youlend.com/apply/" + partner + "/signup"
        );

        if (partner === "brainpoint-be/be-fr") {
          const loginButton = page.locator(
            "body > app-root > yl-header > mat-toolbar > div > div.user-controls > div.user-account-control"
          );

          await delay(500);

          expect(await loginButton.screenshot()).toMatchSnapshot(
            `YL-${partner}Login-Button.png`
          );

          await delay(1500);

          await page.click("text=Connexion");
          expect(page.url()).toContain("https://youlend-stag.eu.auth0.com/");

          await delay(2000);

          expect(await page.screenshot()).toMatchSnapshot(
            `YL-${partner}Auth0-page.png`
          );
        } else if (partner === "brainpoint-be" || partner === "boloo/nl") {
          const loginButton = page.locator("body > app-root > yl-header > mat-toolbar > div > div.user-controls > div.user-account-control");
          expect(await loginButton.screenshot()).toMatchSnapshot(
            `YL-${partner}Login-Button.png`
            
          );
          await page.click("text=Inloggen");
          expect(page.url()).toContain("https://youlend-stag.eu.auth0.com/");

          await delay(2000);

          expect(await page.screenshot()).toMatchSnapshot(
            `YL-${partner}Auth0-page.png`
          );
        } else if (partner === "payu/pl") {
            const loginButton = page.locator("body > app-root > yl-header > mat-toolbar > div > div.user-controls > div.user-account-control");
            expect(await loginButton.screenshot()).toMatchSnapshot(
              `YL-${partner}Login-Button.png`
            );
            await page.click("body > app-root > yl-header > mat-toolbar > div > div.user-controls > div.user-account-control");
            expect(page.url()).toContain("https://youlend-stag.eu.auth0.com/");
  
            await delay(2000);
  
            expect(await page.screenshot()).toMatchSnapshot(
              `YL-${partner}Auth0-page.png`
            );
  

        } else {
          const loginButton = page.locator("text=Loginperson >> span");
          expect(await loginButton.screenshot()).toMatchSnapshot(
            `YL-${partner}Login-Button.png`
          );

          await delay(1500);

          await page.click("text=Login");
          expect(page.url()).toContain("https://youlend-stag.eu.auth0.com/");

          await delay(2500);

          expect(await page.screenshot()).toMatchSnapshot(
            `YL-${partner}Auth0-page.png`
          );
        }

        switch (partner) {
          case "justeat":
            partnerCredential("justeat", page)
            break;
          case "shopify":
            partnerCredential("shopify", page)
            break;
          case "paymentsense":
            partnerCredential("paymentsense", page)
            break;
          case "rms":
            partnerCredential("rms", page)
            break;
          case "dojo":
            partnerCredential("dojo", page)
            break;
          case "google":
            partnerCredential("google", page)
            break;
          case "mastercard":
            partnerCredential("mastercard", page)
            break;
          case "takepayments":
            partnerCredential("takepayments", page)
            break;
          case "ebayuk":
            partnerCredential("ebayuk", page)
            break;
          case "kinex":
            partnerCredential("kinex", page)
            break;
          case "payu/pl":
            partnerCredential("payu/pl", page)
            break;
          case "swoop":
            partnerCredential("swoop", page)
            break;
          case "boloo/nl":
            partnerCredential("boloo/nl", page)
            break;
          case "foodhub":
            partnerCredential("foodhub", page)
            break;
          case "eposnowcapital":
            partnerCredential("eposnowcapital", page)
            break;
          case "fundingcircle":
            partnerCredential("fundingcircle", page)
            break;
          case "hdp":
            partnerCredential("hdp", page)
            break;
          case "paypoint":
            partnerCredential("paypoint", page)
            break;
          case "tide":
            partnerCredential("tide", page)
            break;
          case "wedoaccounting":
            partnerCredential("wedoaccounting", page)
            break;
          case "brainpoint-be/be-fr":
            partnerCredential("brainpoint-be/be-fr", page)
            break;

          default:
            throw Error("Partner Not Found!!!!");
        }

        await delay(500);

        await page.click(
          "#auth0-lock-container-1 > div > div.auth0-lock-center > form > div > div > div > button > span"
        );

        await page.click("body > div > div > a");

        await delay(3500);

        expect(await page.screenshot()).toMatchSnapshot(
          `YL-${partner}-page.png`
        );
      }
    );
  });
});
