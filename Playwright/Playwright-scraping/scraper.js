const playwright = require('playwright')
const random_useragent = require('random-useragent')

const BASE_URL = 'https://github.com/topics/playwright'

    ; (async () => {

        // Create Random Agent
        const agent = random_useragent.getRandom()

        // Setup browser
        const browser = await playwright.chromium.launch({ headless: true })
        const context = await browser.newContext()
        const page = await context.newPage({ bypassCSP: true })
        await page.setDefaultTimeout(5000)
        await page.setViewportSize({ width: 800, height: 600 })
        await page.goto(BASE_URL)
        
        //
        console.log(agent)
        // Close browser
        await browser.close()

    })().catch((error) => {
        console.log(error)
        process.exit(1)
    })

