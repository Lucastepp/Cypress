import test, { expect, Locator, Page } from "@playwright/test";

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
  ];

  partners.forEach((partner) => {
    test(
      " 01 - Login In on Partner  = [ " + partner + " ]",
      async ({ page }) => {
        await page.goto(
          "https://staging.youlend.com/apply/" + partner + "/signup"
        );

        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
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
        const loginButton = page.locator("text=Loginperson >> span");
        expect(await loginButton.screenshot()).toMatchSnapshot(
          `YL-${partner}Login-Button.png`
        );

        //? Force wait for 1 sec to have full popup as expected
        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        await delay(1500);

        await page.click("text=Login");
        expect(page.url()).toContain("https://youlend-stag.eu.auth0.com/");

        await delay(2000);

        expect(await page.screenshot()).toMatchSnapshot(
          `YL-${partner}Auth0-page.png`
        );

        switch (partner) {
          case "justeat":
            await page.keyboard.type("lucas.pinto+0276@youlend.com");
            await page.keyboard.down("Tab");
            await page.keyboard.type("Password1!!");
            break;
          case "shopify":
            await page.keyboard.type("lucas.pinto+0278@youlend.com");
            await page.keyboard.down("Tab");
            await page.keyboard.type("Password1!!");
            break;
          case "paymentsense":
            await page.keyboard.type("lucas.pinto+0279@youlend.com");
            await page.keyboard.down("Tab");
            await page.keyboard.type("Password1!!");
            break;
          case "rms":
            await page.keyboard.type("lucas.pinto+0280@youlend.com");
            await page.keyboard.down("Tab");
            await page.keyboard.type("Password1!!");
            break;
          case "dojo":
            await page.keyboard.type("lucas.pinto+0281@youlend.com");
            await page.keyboard.down("Tab");
            await page.keyboard.type("Password1!!");
            break;
          case "google":
            await page.keyboard.type("lucas.pinto+0282@youlend.com");
            await page.keyboard.down("Tab");
            await page.keyboard.type("Password1!!");
            break;
          case "mastercard":
            await page.keyboard.type("lucas.pinto+0283@youlend.com");
            await page.keyboard.down("Tab");
            await page.keyboard.type("Password1!!");
            break;
          case "takepayments":
            await page.keyboard.type("lucas.pinto+0284@youlend.com");
            await page.keyboard.down("Tab");
            await page.keyboard.type("Password1!!");
            break;
          case "ebayuk":
            await page.keyboard.type("lucas.pinto+0285@youlend.com");
            await page.keyboard.down("Tab");
            await page.keyboard.type("Password1!!");
            break;
          case "kinex":
            await page.keyboard.type("lucas.pinto+0286@youlend.com");
            await page.keyboard.down("Tab");
            await page.keyboard.type("Password1!!");
            break;
          case "payu/pl":
            await page.keyboard.type("lucas.pinto+0287@youlend.com");
            await page.keyboard.down("Tab");
            await page.keyboard.type("Password1!!");
            break;
          case "swoop":
            await page.keyboard.type("lucas.pinto+0288@youlend.com");
            await page.keyboard.down("Tab");
            await page.keyboard.type("Password1!!");
            break;
          case "boloo/nl":
            await page.keyboard.type("lucas.pinto+0291@youlend.com");
            await page.keyboard.down("Tab");
            await page.keyboard.type("Password1!!");
            break;
          case "foodhub":
            await page.keyboard.type("lucas.pinto+0292@youlend.com");
            await page.keyboard.down("Tab");
            await page.keyboard.type("Password1!!");
            break;
          case "eposnowcapital":
            await page.keyboard.type("lucas.pinto+0293@youlend.com");
            await page.keyboard.down("Tab");
            await page.keyboard.type("Password1!!");
            break;
          case "fundingcircle":
            await page.keyboard.type("lucas.pinto+0294@youlend.com");
            await page.keyboard.down("Tab");
            await page.keyboard.type("Password1!!");
            break;
          case "hdp":
            await page.keyboard.type("lucas.pinto+0295@youlend.com");
            await page.keyboard.down("Tab");
            await page.keyboard.type("Password1!!");
            break;
          case "paypoint":
            await page.keyboard.type("lucas.pinto+0296@youlend.com");
            await page.keyboard.down("Tab");
            await page.keyboard.type("Password1!!");
            break;
          case "tide":
            await page.keyboard.type("lucas.pinto+0297@youlend.com");
            await page.keyboard.down("Tab");
            await page.keyboard.type("Password1!!");
            break;
          case "wedoaccounting":
            await page.keyboard.type("lucas.pinto+0298@youlend.com");
            await page.keyboard.down("Tab");
            await page.keyboard.type("Password1!!");
            break;

          default:
            throw Error("Partner Not Found!!!!");
        }

        await delay(1500);

        await page.click(
          "#auth0-lock-container-1 > div > div.auth0-lock-center > form > div > div > div > button > span"
        );

        await delay(2500);

        expect(await page.screenshot()).toMatchSnapshot(
          `YL-${partner}-page.png`
        );
      }
    );
  });
});
