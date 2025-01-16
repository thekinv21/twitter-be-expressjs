export class TwitCreateDto {
	content: string
}

export class TwitUpdateDto extends TwitCreateDto {
	id: number
}
