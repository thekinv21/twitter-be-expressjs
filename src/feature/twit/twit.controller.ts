import { Request, Response, Router } from 'express'
import { TwitService } from './twit.service'

const router = Router()

const twitService = new TwitService()

router.get('/', async (req: Request, res: Response) => {
	const twits = await twitService.getAll()
	res.status(200).json(twits)
})

router.get('/:id', async (req: Request, res: Response) => {
	const twit = await twitService.getById(Number(req.params.id))
	res.status(200).json(twit)
})

router.post('/', async (req: Request, res: Response) => {
	const twit = await twitService.create(req.body)
	res.status(201).json(twit)
})

router.put('/:id', async (req: Request, res: Response) => {
	const twit = await twitService.update(req.body)
	res.status(200).json(twit)
})

router.delete('/:id', async (req: Request, res: Response) => {
	await twitService.delete(Number(req.params.id))
	res.status(204).send()
})

export const twitRouter = router
