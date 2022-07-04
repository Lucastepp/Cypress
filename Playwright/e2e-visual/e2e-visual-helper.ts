import { Page, expect } from "@playwright/test";



export class VisualHelper {
  readonly page: Page;
  readonly helper: Page;

  constructor(page: Page) {
    this.page = page;
    this.helper = this.helper;
  }

  

  async loadHomePage(env) {
    switch (env) {
      case "staging":
        return "https://staging.youlend.com/apply/"
        

      case "stag-internal":
        await this.page.goto("https://staging.ylinternal.com/apply/");
        break;

      case "jubilee":
        await this.page.goto("https://jubilee.dev-ylinternal.com/apply/");
        break;

      case "jub-internal":
        await this.page.goto("https://jubilee.dev-ylinternal.com/apply/");
        break;

      case "production":
        await this.page.goto("https://www.youlend.com/apply/");
        break;

      default:
        throw Error("Environment Not Found!!!!");
    }
  }

  async delay(ms) {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
    await delay(ms);
  }

  
  async promise(param) {
    const result = await Promise.resolve(param);
    let string: string = result
    return string;
  }

  async loadEnv(page, partner, env){
    let site = await this.loadHomePage(env);
    await page.goto(site + partner + "/signup");
    this.delay(2000);
  } 


  async languageCheck(partner, page){
    let helper = new VisualHelper(this.page)

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
  }

  

  

}


