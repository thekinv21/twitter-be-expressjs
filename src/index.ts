import * as dotenv from 'dotenv'
import express, { Express, Request, Response } from 'express'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { swaggerOptions } from './config'

const app: Express = express()
const port = process.env.PORT || 4200

dotenv.config()

async function main() {
	const swaggerDocs = swaggerJsdoc(swaggerOptions)

	app.use(express.json())
	app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

	app.post('/api/twit', (req: Request, res: Response) => {
		res
			.json({
				message: 'Hello, Twitter API!',
			})
			.status(200)
	})

	app.listen(port, () => {
		console.log(`Typescript Server running on port ${port}`)
	})
}

main()
