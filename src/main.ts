import 'dotenv/config'
import express, { Express } from 'express'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import 'tsconfig-paths/register'

import { twitRouter } from '@/feature'

import { swaggerOptions } from '@/config'

import prisma from '@/prisma'

const app: Express = express()
const port = process.env.PORT || 4200

async function main() {
	const swaggerDocs = swaggerJsdoc(swaggerOptions)

	app
		.use(express.json())
		.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
		.use('/api/twit', twitRouter)
		.listen(port, () => {
			console.log(`ExpressJs Server is running on port ${port}`)
		})
}

main()
	.then(async () => {
		await prisma.$connect()
	})
	.catch(async e => {
		await prisma.$disconnect()
		process.exit(1)
	})
