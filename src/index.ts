import { swaggerOptions } from '@/config'
import { twitRouter } from '@/feature'
import { PrismaClient } from '@prisma/client'
import * as dotenv from 'dotenv'
import express, { Express } from 'express'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import 'tsconfig-paths/register'

const app: Express = express()
const port = process.env.PORT || 4200

dotenv.config()

export const prisma = new PrismaClient()

async function main() {
	const swaggerDocs = swaggerJsdoc(swaggerOptions)

	app.use(express.json())
	app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

	app.listen(port, () => {
		console.log(`ExpressJs Server is running on port ${port}`)
	})

	app.use('/api/twit', twitRouter)
}

main()
	.then(async () => {
		await prisma.$connect()
	})
	.catch(async e => {
		await prisma.$disconnect()
		process.exit(1)
	})
