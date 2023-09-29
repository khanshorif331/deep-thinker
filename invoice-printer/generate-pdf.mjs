import puppeteer from 'puppeteer'
import gerateInvoiceHTML from './generate-invoice.mjs'
const browser = await puppeteer.launch({ headless: false })

const page = await browser.newPage()
const invoiceHtml = await gerateInvoiceHTML()
await page.setContent(invoiceHtml, { waitUntil: 'networkidle0' })
await page.evaluateHandle('document.fonts.ready')
await page.pdf({
	path: 'data/invoice.pdf',
	format: 'legal',
	printBackground: true,
})

await browser.close()
