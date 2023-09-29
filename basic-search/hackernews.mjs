import puppeteer from 'puppeteer'

const browser = await puppeteer.launch({ headless: false })
const page = await browser.newPage()

await page.goto('https://hn.algolia.com')
await page.waitForSelector('.SearchInput')

await page.type('.SearchInput', 'show hn', { delay: 200 })

await page.screenshot({ path: './data/search.png' })

await page.evaluate(() => {
	;[...document.querySelectorAll('.Story_title')]
})

await browser.close()
