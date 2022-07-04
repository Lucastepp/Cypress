import { Page } from "@playwright/test";

export class VisualHelper {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async loadHomePage(env: String) {
    switch (env) {
      case "staging":
        return "https://staging.youlend.com/"
        

      case "stag-internal":
        await this.page.goto("https://staging.ylinternal.com/");
        break;

      case "jubilee":
        await this.page.goto("https://jubilee.dev-ylinternal.com/");
        break;

      case "jub-internal":
        await this.page.goto("https://jubilee.dev-ylinternal.com/");
        break;

      case "production":
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
}


