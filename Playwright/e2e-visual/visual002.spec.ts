import test, { expect, Locator, Page } from "@playwright/test";

test.describe("Partner Dashboard Visual Regression", () => {
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
    // "payU",
    // "Swoopfinance",
  ];

  partners.forEach((partner) => {
    test(
      " 01 - Login In on Partner  = [ " + partner + " ]",
      async ({ page }) => {
        await page.goto(
          "https://staging.youlend.com/apply/" + partner + "/signup"
        );

        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        await delay(1500);

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
        const loginButton = page.locator("text=Login");
        expect(await loginButton.screenshot()).toMatchSnapshot(
          `YL-${partners}Login-Button.png`
        );

        //? Force wait for 1 sec to have full popup as expected
        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        await delay(1500);

        expect(await page.screenshot()).toMatchSnapshot(
          `YL-${partner}Signup-page.png`
        );

        await page.click("text=Login");
        expect(page.url()).toContain("https://youlend-stag.eu.auth0.com/");

        //? Force wait for 1 sec to have full popup as expected
        const delayx = (ms) =>
          new Promise((resolve) => setTimeout(resolve, ms));

        await delayx(3000);

        switch (partner) {
          case "justeat":
            await page.keyboard.type("lucas.pinto+0276@youlend.com");
            await page.keyboard.down("Tab");
            await page.keyboard.type("Password1!!");

            break;
          case "shopify":
            break;
          case "paymentsense":
            break;
          case "rms":
            break;
          case "dojo":
            break;
          case "google":
            break;
          case "mastercard":
            break;
          case "takepayments":
            break;
          case "ebayuk":
            break;
          case "kinex":
            break;
          case "payU":
            break;
          case "Swoopfinance":
            break;
          default:
            throw Error("Partner Not Found!!!!");
        }

        await delayx(1000);

        expect(await page.screenshot()).toMatchSnapshot(
          `YL-${partner}Auth0-page.png`
        );

        await page.click(
          "#auth0-lock-container-1 > div > div.auth0-lock-center > form > div > div > div > button > span"
        );

        await delayx(2000);

        expect(await page.screenshot()).toMatchSnapshot(
          `YL-${partner}-page.png`
        );
      }
    );
  });
});
