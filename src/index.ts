import * as dotenv from 'dotenv'
import express, { Express, Request, Response } from 'express'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 4200

app.get('/', (req: Request, res: Response) => {
	res.send('Express + Typescript Server tutorial')
})

app.listen(port, () => {
	console.log(`Typescript Server running on port ${port}`)
})
