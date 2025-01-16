import * as dotenv from 'dotenv'
import express, { Express } from 'express'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { swaggerOptions } from './config'
import { twitRouter } from './feature'

const app: Express = express()
const port = process.env.PORT || 4200

dotenv.config()

async function main() {
	const swaggerDocs = swaggerJsdoc(swaggerOptions)

	app.use(express.json())
	app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

	app.post('/api/twit', twitRouter)

	app.listen(port, () => {
		console.log(`Typescript Server running on port ${port}`)
	})
}

main()
