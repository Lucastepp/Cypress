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
      }
    );

    test(
      " 04 - Login in on  = [ " + partner + " ] Dashboard",
      async ({ page }) => {
        await page.goto(
          "https://youlend-stag.eu.auth0.com/login?state=hKFo2SBadTZFdHI1VXJJaGJQbmFFQ1REYUkwZUJTTWczeWJmbaFupWxvZ2luo3RpZNkgRUVfeGZsRU1mRlgySnZ6NXV3MWJrNDVfdkhmOFVtcEujY2lk2SB4cjlKMWk2ZFFsM3dGTFRsbkZJMmVkdTBoY2FjeUVzOQ&client=xr9J1i6dQl3wFLTlnFI2edu0hcacyEs9&protocol=oauth2&redirect_uri=https%3A%2F%2Fstaging.youlend.com%2Fapply%2Fjusteat%2Flogin-callback&audience=https%3A%2F%2Fstaging.ylcustomerapi.com&responseType=token%20id_token%20refresh_token&scope=openid%20profile%20email%20offline_access&yl_site_options=&language=en&response_type=code&response_mode=query&nonce=ckZNRm8zdHZVSzNqai5CMkJLaWZmbEFQNE9kVF9NMzlZcWU1d1lKQ2VzdQ%3D%3D&code_challenge=liiuWUvIT5cuiL0Uy3jALmcWFs1efmV4mUurVF9NOkU&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiQGF1dGgwL2F1dGgwLWFuZ3VsYXIiLCJ2ZXJzaW9uIjoiMS4zLjIifQ%3D%3D"
        );

        switch (`${partner}`) {
          case "justeat":
            await page.type(
              "text=yours@example.com",
              "lucas.pinto+0276@youlend.com"
            );
            await page.type("text=your password", "Password1!!");

            break;
          case "shopify":
            await page.type(
              "text=yours@example.com",
              "lucas.pinto+0278@youlend.com"
            );
            await page.type("text=your password", "Password1!!");
            break;
          case "paymentsense":
            await page.type(
              "text=yours@example.com",
              "lucas.pinto+0279@youlend.com"
            );
            await page.type("text=your password", "Password1!!");
            break;
          case "rms":
            await page.type(
              "text=yours@example.com",
              "lucas.pinto+0280@youlend.com"
            );
            await page.type("text=your password", "Password1!!");
            break;
          case "dojo":
            await page.type(
              "text=yours@example.com",
              "lucas.pinto+0281@youlend.com"
            );
            await page.type("text=your password", "Password1!!");
            break;
          case "google":
            await page.type(
              "text=yours@example.com",
              "lucas.pinto+0282@youlend.com"
            );
            await page.type("text=your password", "Password1!!");
            break;
          case "mastercard":
            await page.type(
              "text=yours@example.com",
              "lucas.pinto+0283@youlend.com"
            );
            await page.type("text=your password", "Password1!!");
            break;
          case "takepayments":
            await page.type(
              "text=yours@example.com",
              "lucas.pinto+0284@youlend.com"
            );
            await page.type("text=your password", "Password1!!!");
          case "ebayuk":
            await page.type(
              "text=yours@example.com",
              "lucas.pinto+0285@youlend.com"
            );
            await page.type("text=your password", "Password1!!!");
            break;
          case "kinex":
            await page.type(
              "text=yours@example.com",
              "lucas.pinto+0286@youlend.com"
            );
            await page.type("text=your password", "Password1!!!");
            break;
          case "payU":
            await page.type(
              "text=yours@example.com",
              "lucas.pinto+0287@youlend.com"
            );
            await page.type("text=your password", "Password1!!!");
            break;
          case "Swoopfinance":
            await page.type(
              "text=yours@example.com",
              "lucas.pinto+0288@youlend.com"
            );
            await page.type("text=your password", "Password1!!!");
            break;
          default:
            throw Error("Partner Not Found!!!!");
        }

        expect(await page.screenshot()).toMatchSnapshot(
          `YL-${partner}Auth0-page.png`
        );
        await page.click("text=Log In");

        expect(await page.screenshot()).toMatchSnapshot(
          `YL-${partner}-page.png`
        );
      }
    );
  });
});
