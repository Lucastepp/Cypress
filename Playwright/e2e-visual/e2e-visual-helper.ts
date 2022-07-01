import { Page } from "@playwright/test";


export class VisualHelper {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
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

  

  

}


