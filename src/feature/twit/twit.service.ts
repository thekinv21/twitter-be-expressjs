import { prisma } from '@/index'

import { CreateTwitDto, UpdateTwitDto } from './dto/twit.request'

export class TwitService {
	prisma = prisma

	async getAll() {
		try {
			const twits = await this.prisma.twit.findMany()
			return twits
		} catch (error) {
			throw new Error(error)
		}
	}

	async getById(id: number) {
		try {
			const twit = await this.prisma.twit.findUnique({ where: { id } })

			if (!twit) {
				throw new Error('Twit not found')
			}
		} catch (error) {
			throw new Error(error)
		}
	}

	async create(createDto: CreateTwitDto) {
		return this.prisma.twit.create({ data: createDto })
	}

	async update(updateDto: UpdateTwitDto) {
		try {
			await this.getById(updateDto.id)

			return this.prisma.twit.update({
				where: { id: updateDto.id },
				data: updateDto
			})
		} catch (error) {
			throw new Error(error)
		}
	}

	async delete(id: number) {
		try {
			await this.getById(id)

			return this.prisma.twit.delete({ where: { id } })
		} catch (error) {
			throw new Error(error)
		}
	}
}
