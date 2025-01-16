import { CreateTwitDto, UpdateTwitDto } from './dto/twit.request'

export class TwitService {
	constructor() {}

	async getAll() {
		return 'All twits'
	}

	async getById(id: number) {
		return 'Twit by id'
	}

	async create(createDto: CreateTwitDto) {
		return 'Twit created successfully'
	}

	async update(createDto: UpdateTwitDto) {
		return 'Twit updated successfully'
	}

	async delete(id: number) {
		return 'Twit deleted successfully'
	}
}
