import puppeteer from 'puppeteer'

const browser = await puppeteer.launch({ headless: false })
const page = await browser.newPage()

await page.goto('https://hn.algolia.com')
await page.waitForSelector('.SearchInput')

await page.type('.SearchInput', 'hn news', { delay: 200 })

await page.screenshot({ path: './data/hn.png' })

await browser.close()
