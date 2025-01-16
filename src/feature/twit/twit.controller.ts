import { Request, Response, Router } from 'express'
import { TwitService } from './twit.service'

/**
 * @swagger
 * /api/twit:
 *   get:
 *     summary: Get all tweets
 *     description: Endpoint to get all tweets
 *     responses:
 *       200:
 *         description: List of all tweets
 */

const router = Router()

const twitService = new TwitService()

/**
 * @swagger
 * /api/twit:
 *   get:
 *     summary: Get all tweets
 *     description: Endpoint to get all tweets
 *     responses:
 *       200:
 *         description: List of all tweets
 */

router.get('/', async (req: Request, res: Response) => {
	const twits = await twitService.getAll()
	res.status(200).json(twits)
})

/**
 * @swagger
 * /api/twit/{id}:
 *   get:
 *     summary: Get tweet by id
 *     description: Endpoint will be return tweet by id
 *     responses:
 *       200:
 *         description: Tweet found successfully
 */

router.get('/:id', async (req: Request, res: Response) => {
	const twit = await twitService.getById(Number(req.params.id))
	res.status(200).json(twit)
})

/**
 * @swagger
 * /api/twit:
 *   post:
 *     summary: Create a new tweet
 *     description: Endpoint to create a new tweet
 *     responses:
 *       201:
 *         description: Tweet created successfully
 */
router.post('/', async (req: Request, res: Response) => {
	const twit = await twitService.create(req.body)
	res.status(201).json(twit)
})

/**
 * @swagger
 * /api/twit/{id}:
 *   put:
 *     summary: Edit a existing tweet
 *     description: Endpoint will be edit to existing tweet
 *     responses:
 *       201:
 *         description: Tweet updated successfully
 */

router.put('/:id', async (req: Request, res: Response) => {
	const twit = await twitService.update(req.body)
	res.status(201).json(twit)
})

/**
 * @swagger
 * /api/twit/{id}:
 *   delete:
 *     summary: Delete a tweet
 *     description: Endpoint will be delete tweet
 *     responses:
 *       204:
 *         description: Tweet deleted successfully
 */
router.delete('/:id', async (req: Request, res: Response) => {
	await twitService.delete(Number(req.params.id))
	res.status(204).send()
})

export const twitRouter = router
