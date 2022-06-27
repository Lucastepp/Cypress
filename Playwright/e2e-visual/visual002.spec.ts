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
    "payU",
    "Swoopfinance",
  ];

  partners.forEach((partner) => {

    test("Login In on Partner  = [ " + partner + " ]", async ({ page }) => {
      await page.goto(`https://staging.youlend.com/apply/${partner}/signup`);
    });

    test("Checking page of Partner  = [ " + partner + " ]",
        async ({ page }) => {
        expect(page.url()).toContain(`${partner}/signup`);
      }
    );

    test("Printing Login button and Login in on  = [ " + partner + " ]",
        async ({ page }) => {
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

        await page.click("loginButton");
        expect(page.url()).toContain("https://youlend-stag.eu.auth0.com/");
      }
    );

    test("Login in on  = [ " + partner + " ] Dashboard", async ({ page }) => {

      switch (`${partner}`) {
        case 'justeat':
            await page.type("text=yours@example.com", 'lucas.pinto+0276@youlend.com')
            await page.type("text=your password", 'Password1!!!')
            
          break;
        case 'shopify':
            await page.type("text=yours@example.com", 'lucas.pinto+0278@youlend.com')
            await page.type("text=your password", 'Password1!!!')
          break;
        case "paymentsense":
            await page.type("text=yours@example.com", 'lucas.pinto+0279@youlend.com')
            await page.type("text=your password", 'Password1!!!')
          break;
        case "rms":
            await page.type("text=yours@example.com", 'lucas.pinto+0280@youlend.com')
            await page.type("text=your password", 'Password1!!!')
          break;
        case "dojo":
            await page.type("text=yours@example.com", 'lucas.pinto+0281@youlend.com')
            await page.type("text=your password", 'Password1!!!')
          break;
        case "google":
            await page.type("text=yours@example.com", 'lucas.pinto+0282@youlend.com')
            await page.type("text=your password", 'Password1!!!')
          break;
        case "mastercard":
            await page.type("text=yours@example.com", 'lucas.pinto+0283@youlend.com')
            await page.type("text=your password", 'Password1!!!')
          break;
        case "takepayments":
            await page.type("text=yours@example.com", 'lucas.pinto+0284@youlend.com')
            await page.type("text=your password", 'Password1!!!')
          case "ebayuk":
            await page.type("text=yours@example.com", 'lucas.pinto+0285@youlend.com')
            await page.type("text=your password", 'Password1!!!')
          break;
        case "kinex":
            await page.type("text=yours@example.com", 'lucas.pinto+0286@youlend.com')
            await page.type("text=your password", 'Password1!!!')
          break;
        case "payU":
            await page.type("text=yours@example.com", 'lucas.pinto+0287@youlend.com')
            await page.type("text=your password", 'Password1!!!')
          break;
        case "Swoopfinance":
            await page.type("text=yours@example.com", 'lucas.pinto+0288@youlend.com')
            await page.type("text=your password", 'Password1!!!')
          break;
        default:
        throw Error('Partner Not Found!!!!')
      }


      expect(await page.screenshot()).toMatchSnapshot(
        `YL-${partner}Auth0-page.png`
      );
      await page.click("text=Log In");

      expect(await page.screenshot()).toMatchSnapshot(
        `YL-${partner}-page.png`
      );


    });
  });
});
