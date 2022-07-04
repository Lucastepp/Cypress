import { Page } from '@playwright/test'

export async function partnerCredential(partner, page) {

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
        case "brainpoint-be/be-fr":
          await page.keyboard.type("lucas.pinto+0299@youlend.com");
          await page.keyboard.down("Tab");
          await page.keyboard.type("Password1!!");
          break;

        default:
          throw Error("Partner Not Found!!!!");
      }
}