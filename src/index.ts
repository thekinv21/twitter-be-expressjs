import * as dotenv from 'dotenv'
import express, { Express, Request, Response } from 'express'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { swaggerOptions } from './config'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 4200

app.get('/', (req: Request, res: Response) => {
	res.send('Express + Typescript Server tutorial')
})

app.listen(port, () => {
	console.log(`Typescript Server running on port ${port}`)
})

const swaggerDocs = swaggerJsdoc(swaggerOptions)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
