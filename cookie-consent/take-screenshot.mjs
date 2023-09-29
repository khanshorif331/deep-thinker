import puppeteer from 'puppeteer'
import { PuppeteerBlocker } from '@cliqz/adblocker-puppeteer'
import fetch from 'cross-fetch'

const browser = await puppeteer.launch({ headless: false })

const page = await browser.newPage()

const blocker = await PuppeteerBlocker.fromLists(fetch, [
	'https://easylist.to/easylist/easylist.txt',
	'https://secure.fanboy.co.nz/fanboy-cookiemonster.txt',
])

await blocker.enableBlockingInPage(page)

await page.goto('https://www.onetrust.com/products/cookie-consent/', {
	waitUntil: 'networkidle0',
})

// wait for selector and then click
// const acceptBtn = await page
// 	.waitForSelector('#onetrust-accept-btn-handler', { timeout: 2000 })
// 	.catch(() => console.log('cookie popup not found in 2 seconds'))
// if (acceptBtn) {
// 	await acceptBtn.click()
// }

// find element and then click
// const acceptBtn = await page.$('#onetrust-accept-btn-handler')

// if (acceptBtn) {
// 	await acceptBtn.click()
// }

// remove cookie consent with evaluate
// await page.evaluate(() => {
// 	document.querySelector('#onetrust-consent-sdk')?.remove()
// })

// // remove cookie consent with css
// await page.addStyleTag({ content: `#onetrust-consent-sdk {display:none}` })

// remove cookie consent with script tag
// await page.addScriptTag({
// 	content: `document.querySelector('#onetrust-consent-sdk')?.remove()`,
// })

await page.screenshot({ path: 'data/consent.png' })

await browser.close()
