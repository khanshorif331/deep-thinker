import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

export default async function gerateInvoiceHTML() {
	const __filename = fileURLToPath(import.meta.url)
	const __dirname = path.dirname(__filename)

	const invoiceHtml = await fs.readFile(__dirname + '/invoice.html', 'utf-8')
	// console.log(invoiceHtml)
	return invoiceHtml
}
