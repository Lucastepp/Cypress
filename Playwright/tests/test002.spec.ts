import { test, expect } from "@playwright/test";
import { loadHomepage, assertTitle } from '../helpers'

test.describe("Hooks", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("http://zero.webappsecurity.com/");
    })

    test.afterEach(async ({ page }) => {
        //
    })

    test.only("Screenshots", async ({ page }) => {
        //await page.goto("http://zero.webappsecurity.com/");
        await page.screenshot({ path: 'screenshot.png', fullPage: true })
    })

    test.only("Single Element Screenshot", async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/')

        await page.locator('#carousel > div > div.active.item > div > h4')
            .screenshot({ path: 'single_element_screenshot_newSyntax.png' });
        //old syntax
        //const element = await page.$('#carousel > div > div.active.item > div > h4')
        //await element.screenshot({ path: "single_element_screenshot.png" })
    })
})

test.describe("Test 1 Examples", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("http://zero.webappsecurity.com/");
    })

    test.afterEach(async ({ page }) => {
        //
    })

    test.only("Custom Helpers", async ({ page }) => {
        await loadHomepage(page)
        await assertTitle(page)
    });

    test("Assertions @mytag", async ({ page }) => {
        await page.goto("http://zero.webappsecurity.com/");
        await expect(page).toHaveURL("http://zero.webappsecurity.com/");
        await expect(page).toHaveTitle("Zero - Personal Banking - Loans - Credit Cards");

        const element = await page.locator('#carousel > div > div.active.item > div > h4');
        await expect(element).toBeVisible();
        await expect(element).toHaveText("Online Banking ")
        await expect(element).toHaveCount(1)

        const nonExistingElement = await page.locator('h5')
        await expect(nonExistingElement).not.toBeVisible()
    });
})

