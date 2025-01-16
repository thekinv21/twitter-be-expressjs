import { IsInt, IsNotEmpty, IsString } from 'class-validator'

export class CreateTwitDto {
	@IsString()
	@IsNotEmpty()
	content: string

	@IsString()
	@IsNotEmpty()
	author: string
}

export class UpdateTwitDto extends CreateTwitDto {
	@IsInt()
	@IsNotEmpty()
	id: number
}
