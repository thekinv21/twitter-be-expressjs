const port = process.env.PORT || 4200

export const swaggerOptions = {
	definition: {
		openapi: '3.1.0',
		info: {
			title: 'Twitter Express API with Swagger',
			version: '0.1.0',
			description:
				'This is a simple Twitter Backend CRUD API application made with Express and documented with Swagger',
		},
		servers: [
			{
				url: `http://localhost:${port}`,
			},
		],
		components: {
			schemas: {
				Tweet: {
					type: 'object',
					properties: {
						id: {
							type: 'integer',
							example: 1,
						},
						content: {
							type: 'string',
							example: 'Hello world!',
						},
						author: {
							type: 'string',
							example: 'JohnDoe',
						},
					},
				},
				TweetRequest: {
					type: 'object',
					properties: {
						content: {
							type: 'string',
							example: 'Hello world!',
						},
						author: {
							type: 'string',
							example: 'JohnDoe',
						},
					},
				},
			},
			parameters: {
				TweetId: {
					name: 'id',
					in: 'path',
					required: true,
					description: 'ID of the tweet',
					schema: {
						type: 'integer',
					},
				},
			},
			requestBodies: {
				TweetRequest: {
					description: 'Tweet data',
					required: true,
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/TweetRequest',
							},
						},
					},
				},
			},
		},
		paths: {
			'/api/twit': {
				get: {
					summary: 'Get all tweets',
					tags: ['Twit'],
					responses: {
						'200': {
							description: 'List of all tweets',
							content: {
								'application/json': {
									schema: {
										type: 'array',
										items: {
											$ref: '#/components/schemas/Tweet',
										},
									},
								},
							},
						},
					},
				},
				post: {
					summary: 'Create a new tweet',
					tags: ['Twit'],
					requestBody: {
						$ref: '#/components/requestBodies/TweetRequest',
					},
					responses: {
						'201': {
							description: 'Tweet created successfully',
							content: {
								'application/json': {
									schema: {
										$ref: '#/components/schemas/Tweet',
									},
								},
							},
						},
					},
				},
			},
			'/api/twit/{id}': {
				get: {
					summary: 'Get a tweet by ID',
					tags: ['Twit'],
					parameters: [
						{
							$ref: '#/components/parameters/TweetId',
						},
					],
					responses: {
						'200': {
							description: 'Tweet retrieved successfully',
							content: {
								'application/json': {
									schema: {
										$ref: '#/components/schemas/Tweet',
									},
								},
							},
						},
					},
				},
				put: {
					summary: 'Edit an existing tweet',
					tags: ['Twit'],
					parameters: [
						{
							$ref: '#/components/parameters/TweetId',
						},
					],
					requestBody: {
						$ref: '#/components/requestBodies/TweetRequest',
					},
					responses: {
						'200': {
							description: 'Tweet updated successfully',
							content: {
								'application/json': {
									schema: {
										$ref: '#/components/schemas/Tweet',
									},
								},
							},
						},
					},
				},
				delete: {
					summary: 'Delete a tweet',
					tags: ['Twit'],
					parameters: [
						{
							$ref: '#/components/parameters/TweetId',
						},
					],
					responses: {
						'204': {
							description: 'Tweet deleted successfully',
						},
					},
				},
			},
		},
	},
	apis: ['./src/**/*.ts'],
}
