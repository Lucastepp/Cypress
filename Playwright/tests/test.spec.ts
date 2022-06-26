import { test, expect } from "@playwright/test";
import { loadHomepage, assertTitle } from '../helpers'

test("basic test", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  const title = page.locator(".navbar__inner .navbar__title");
  await expect(title).toHaveText("Playwright");
});

test("Clickin on Elements", async ({ page }) => {
  await page.goto("http://zero.webappsecurity.com/");
  await page.click("#signin_button");
  await page.click("text=Sign in");

  const errorMessage = await page.locator(".alert-error");
  await expect(errorMessage).toContainText("Login and/or password are wrong.");
});

test("Working with Inputs", async ({ page }) => {
  await page.goto("http://zero.webappsecurity.com/");
  await page.click("#signin_button");

  await page.type("#user_login", "some username");
  await page.type("#user_password", "some password");
  await page.click("text=Sign in");

  const errorMessage = await page.locator(".alert-error");
  await expect(errorMessage).toContainText("Login and/or password are wrong.");
});

test("Assertions @mytag", async ({ page }) => {
  await page.goto("http://zero.webappsecurity.com/");
  await expect(page).toHaveURL("http://zero.webappsecurity.com/");
  await expect(page).toHaveTitle("Zero - Personal Banking - Loans - Credit Cards");

  const element = await page.locator('#carousel > div > div.active.item > div > h4');
  await expect(element).toBeVisible();
  await expect(element).toHaveText("Online Banking")
  await expect(element).toHaveCount(1)

  const nonExistingElement = await page.locator('h5')
  await expect(nonExistingElement).not.toBeVisible()
});

test.only("Screenshots", async ({ page }) => {
  await page.goto("http://zero.webappsecurity.com/");
  await page.screenshot({ path: 'screenshot.png', fullPage: true })
})

test.only("Single Element Screenshot", async ({ page }) => {
  await page.goto('http://zero.webappsecurity.com/')

  await page.locator('#carousel > div > div.active.item > div > h4')
    .screenshot({ path: 'single_element_screenshot_newSyntax.png' });

  //old syntax - remember do check here if problems with screenshot
  //
  //const element = await page.$('#carousel > div > div.active.item > div > h4')
  //await element.screenshot({ path: "single_element_screenshot.png" })
})