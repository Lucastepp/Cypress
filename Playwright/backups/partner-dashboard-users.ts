import { Page } from "@playwright/test";

export class PartnerDashboard {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async partnerFunc(email: string) {
    await this.page.click("input[name='email']");
    await this.page.keyboard.type(email);
    await this.page.click("input[name='password']");
    await this.page.keyboard.type("Password1!!");
  }


  //*********** STAGING ***************

  async partnerCredential(partner: string) {
    switch (partner) {
      case "justeat":
        await this.partnerFunc("lucas.pinto+0276@youlend.com");
        break;
      case "shopify":
        await this.partnerFunc("lucas.pinto+0278@youlend.com");
        break;
      case "paymentsense":
        await this.partnerFunc("lucas.pinto+0279@youlend.com");
        break;
      case "rms":
        await this.partnerFunc("lucas.pinto+0280@youlend.com");
        break;
      case "dojo":
        await this.partnerFunc("lucas.pinto+0281@youlend.com");
        break;
      case "google":
        await this.partnerFunc("lucas.pinto+0282@youlend.com");
        break;
      case "mastercard":
        await this.partnerFunc("lucas.pinto+0283@youlend.com");
        break;
      case "takepayments":
        await this.partnerFunc("lucas.pinto+0284@youlend.com");
        break;
      case "ebayuk":
        await this.partnerFunc("lucas.pinto+0285@youlend.com");
        break;
      case "kinex":
        await this.partnerFunc("lucas.pinto+0286@youlend.com");
        break;
      case "payu/pl":
        await this.partnerFunc("lucas.pinto+0287@youlend.com");
        break;
      case "swoop":
        await this.partnerFunc("lucas.pinto+0288@youlend.com");
        break;
      case "boloo/nl":
        await this.partnerFunc("lucas.pinto+0291@youlend.com");
        break;
      case "foodhub":
        await this.partnerFunc("lucas.pinto+0276@youlend.com");
        break;
      case "eposnowcapital":
        await this.partnerFunc("lucas.pinto+0276@youlend.com");
        break;
      case "fundingcircle":
        await this.partnerFunc("lucas.pinto+0276@youlend.com");
        break;
      case "hdp":
        await this.partnerFunc("lucas.pinto+0276@youlend.com");
        break;
      case "paypoint":
        await this.partnerFunc("lucas.pinto+0276@youlend.com");
        break;
      case "tide":
        await this.partnerFunc("lucas.pinto+0276@youlend.com");
        break;
      case "wedoaccounting":
        await this.partnerFunc("lucas.pinto+0276@youlend.com");
        break;
      case "brainpoint-be/be-fr":
        await this.partnerFunc("lucas.pinto+0276@youlend.com");
        break;
      case "loanguru":
        await this.partnerFunc("lucas.pinto+0337@youlend.com");
        break;

      default:
        throw Error("Partner Not Found!!!!");
    }
  }

  //*********** JUBILEE CREDENTIALS ***************


  async partnerCredentialJubilee(partner: string) {
    switch (partner) {
      case "dashboard":
        await this.partnerFunc("lucas.pinto+0217@youlend.com");
        break;
      case "dojo":
        await this.partnerFunc("lucas.pinto+0218@youlend.com");
        break;
      case "loanguru":
        await this.partnerFunc("lucas.pinto+0219@youlend.com");
        break;
      case "inspirepayments":
        await this.partnerFunc("lucas.pinto+0220@youlend.com");
        break;
      case "google":
        await this.partnerFunc("lucas.pinto+0221@youlend.com");
        break;

      default:
        throw Error("Partner Not Found!!!!");
    }
  }
}
