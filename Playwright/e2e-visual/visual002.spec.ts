import { test, expect, Locator, Page } from "@playwright/test";
import { PartnerDashboard } from "../partner-dashboard-users";
import { VisualHelper } from "../e2e-visual/e2e-visual-helper";

let helper: VisualHelper;
let partnerClass: PartnerDashboard;

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

test.describe("Partner Dashboard Visual Regression", () => {

 
  


  const partners = [
    "justeat",
    "shopify",
    "paymentsense",
    "rms",
    "dojo",
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
    
    //  test.beforeEach(async({ page }) => {

      
      
      
    //   helper = new VisualHelper(page)
    //   partnerClass = new PartnerDashboard(page)
    

    //  });

    test(
      " 01 - Login In on Partner  = [ " + partner + " ]",
      async ({ page }) => {

        helper = new VisualHelper(page)
        let site = await helper.loadHomePage("staging");
        await page.goto(site + partner + "/signup");
        
       
        //
        await page.click("body > div > div > a");
        delay(2000);

        expect(await page.screenshot()).toMatchSnapshot(
          `YL-${partner}Signup-Landing-page.png`
        );
      }
    );

    test(
      " 02 - Checking page of Partner  = [ " + partner + " ]",
      async ({ page }) => {

        helper = new VisualHelper(page)
        let site = await helper.loadHomePage("staging");
        await page.goto(site + partner + "/signup");
        
        // await page.goto(
        //   "https://staging.youlend.com/apply/" + partner + "/signup"
        // );
        expect(page.url()).toContain(`${partner}/signup`);
      }
    );

    test(
      " 03 - Printing Login button and Login in on  = [ " + partner + " ]",
      async ({ page }) => {

        helper = new VisualHelper(page)
        let site = await helper.loadHomePage("staging");
        await page.goto(site + partner + "/signup");
        
        
        // await page.goto(
        //   "https://staging.youlend.com/apply/" + partner + "/signup"
        // );

        if (partner === "brainpoint-be/be-fr") {
          const loginButton = page.locator(
            "body > app-root > yl-header > mat-toolbar > div > div.user-controls > div.user-account-control"
          );

          delay(500);

          expect(await loginButton.screenshot()).toMatchSnapshot(
            `YL-${partner}Login-Button.png`
          );

          delay(1500);

          await page.click("text=Connexion");
          expect(page.url()).toContain("https://youlend-stag.eu.auth0.com/");

          delay(2000);

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

          delay(2000);

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

          delay(2000);

          expect(await page.screenshot()).toMatchSnapshot(
            `YL-${partner}Auth0-page.png`
          );
        } else {
          const loginButton = page.locator("text=Loginperson >> span");
          expect(await loginButton.screenshot()).toMatchSnapshot(
            `YL-${partner}Login-Button.png`
          );

          delay(1500);

          await page.click("text=Login");
          expect(page.url()).toContain("https://youlend-stag.eu.auth0.com/");

          delay(2500);

          expect(await page.screenshot()).toMatchSnapshot(
            `YL-${partner}Auth0-page.png`
          );
        }

        delay(4500);
        

        //await partnerClass.partnerCredential(partner);

        switch (partner) {
          case "justeat":
            partnerClass.partnerCredential("justeat");
            break;
          case "shopify":
            partnerClass.partnerCredential("shopify");
            break;
          case "paymentsense":
            partnerClass.partnerCredential("paymentsense");
            break;
          case "rms":
            partnerClass.partnerCredential("rms");
            break;
          case "dojo":
            partnerClass.partnerCredential("dojo");
            break;
          // case "google":
          //   partnerCredential("google");
          //   break;
          // case "mastercard":
          //   partnerCredential("mastercard", page);
          //   break;
          // case "takepayments":
          //   partnerCredential("takepayments", page);
          //   break;
          // case "ebayuk":
          //   partnerCredential("ebayuk", page);
          //   break;
          // case "kinex":
          //   partnerCredential("kinex", page);
          //   break;
          // case "payu/pl":
          //   partnerCredential("payu/pl", page);
          //   break;
          // case "swoop":
          //   partnerCredential("swoop", page);
          //   break;
          // case "boloo/nl":
          //   partnerCredential("boloo/nl", page);
          //   break;
          // case "foodhub":
          //   partnerCredential("foodhub", page);
          //   break;
          // case "eposnowcapital":
          //   partnerCredential("eposnowcapital", page);
          //   break;
          // case "fundingcircle":
          //   partnerCredential("fundingcircle", page);
          //   break;
          // case "hdp":
          //   partnerCredential("hdp", page);
          //   break;
          // case "paypoint":
          //   partnerCredential("paypoint", page);
          //   break;
          // case "tide":
          //   partnerCredential("tide", page);
          //   break;
          // case "wedoaccounting":
          //   partnerCredential("wedoaccounting", page);
          //   break;
          // case "brainpoint-be/be-fr":
          //   partnerCredential("brainpoint-be/be-fr", page);
          //   break;

          default:
            throw Error("Partner Not Found!!!!");
        }

        delay(3000);

        await page.click(
          "#auth0-lock-container-1 > div > div.auth0-lock-center > form > div > div > div > button > span"
        );

        await page.click("body > div > div > a");

<<<<<<< HEAD
        delay(3500);
=======
        await delay(3500);
        
<<<<<<< HEAD
>>>>>>> 22da50c93626855596a7ae28f0450a0c05811c04
=======
>>>>>>> 22da50c93626855596a7ae28f0450a0c05811c04

        expect(await page.screenshot()).toMatchSnapshot(
          `YL-${partner}-page.png`
        );
      }

      
    );

    
    
  });
 
  
  
});


