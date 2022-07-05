import { Page, expect, Locator } from "@playwright/test";



export class VisualHelper {
  readonly page: Page;
  readonly helper: Page;
  readonly locator: Locator;
  readonly i;

  constructor(page: Page) {
    this.page = page;
    this.helper = this.helper;
    this.locator = this.locator;
    this.i = this.i;
  }

  //*Staging functions ---------------------- 

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

      case "youlend":
        await this.page.goto("https://www.youlend.com");
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

  async loadEnv(partner, env, page =  this.page){
    let site = await this.loadHomePage(env);
    await page.goto(site + partner + "/signup");
    this.delay(2000);
  } 

  async languageCheck(partner, page =  this.page){
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
     
    } else {
      const loginButton = page.locator("text=Loginperson >> span");
      expect(await loginButton.screenshot()).toMatchSnapshot(
        `YL-${partner}Login-Button.png`
      );

      await page.click("text=Loginperson >> span");

      helper.delay(1000);
      expect(page.url()).toContain("https://youlend-stag.eu.auth0.com/");

    }
  }

  async auth0screenShot(partner, page =  this.page) {
    let helper = new VisualHelper(this.page)
    this.delay(2000);
    expect(await this.page.screenshot()).toMatchSnapshot(
      `YL-${partner}Auth0-page.png`
    );
    this.delay(1000);
  }

  async clickToLogin(page = this.page){
    await page.click(
      "#auth0-lock-container-1 > div > div.auth0-lock-center > form > div > div > div > button > span"
    );
  }
  
  async closePopup(page = this.page){
    await page.click(
      "body > div > div > a"
    );
  }

  async partnerPageScreenShot(partner, page =  this.page) {
    this.delay(3000);
    expect(await this.page.screenshot()).toMatchSnapshot(
      `YL-${partner}-page.png`
    );
    this.delay(1000);
  }

  //*Prod functions --------------------------- 

  async closeCookiesProd(delay = 1000){
    await this.page.click('body > div.cc-window.cc-floating.cc-type-info.cc-theme-classic.cc-bottom.cc-right.cc-color-override--238105223 > div > a')
    await this.delay(delay)
  }

  async pageScreenShot(fileName , page =  this.page) {
    expect(await this.page.screenshot()).toMatchSnapshot(
      `${fileName}`
    );
  }

  async locateAndTakeScreenShot(auxFunc, locator, fileName, page =  this.page){
    auxFunc = page.locator(`${locator}`)
        expect(await auxFunc.screenshot()).toMatchSnapshot(`${fileName}`);
  }

  async multipleScreenShot(name, times, i = this.i, page = this.page){
    for(i = 1; i <= times; i++){
      await this.pageScreenShot(name +i+ '.png')
      await page.keyboard.down('PageDown');
      await this.delay(1000)
    }
  }
}


