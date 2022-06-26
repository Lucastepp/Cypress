export async function loadHomepage(page) {
    await page.goto('http://zero.webappsecurity.com/')
}

export async function assertTitle(page) {
    await page.waitForSelector('#carousel > div > div.active.item > div > h4')
}

export async function delay(ms) {
    new Promise(resolve => setTimeout(resolve, ms))
} 

