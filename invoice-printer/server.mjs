import express from 'express'
import path from 'path'
import generatePDF from './generate-pdf.mjs'

const app = express()
const port = 5000

app.get('/', async (req, res) => {
	await generatePDF()
	res.attachment('invoice.pdf')
	res.sendFile(path.resolve('data/invoice.pdf'))
})

app.listen(port, () => {
	console.log(`Invoice printer is Online at ${port}`)
})
