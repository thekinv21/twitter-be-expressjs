export const swaggerOptions = {
	definition: {
		openapi: '3.1.0',
		info: {
			title: 'Twitter Express API with Swagger',
			version: '0.1.0',
			description:
				'This is a simple Twitter Backend CRUD API application made with Express and documented with Swagger',
			contact: {
				name: 'Vadim Kiniabaev',
				url: 'https://portfolio.bloomify.life',
				email: 'thekinv21@gmail.com',
			},
		},
		servers: [
			{
				url: 'http://localhost:4200',
			},
		],
	},
	apis: ['./feature/index.js'],
}
