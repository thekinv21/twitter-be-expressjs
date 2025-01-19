class ApiResponse<T> {
	isSuccess: boolean
	status: number
	path: string
	message?: string | Array<{ errorMessage: string }>
	timestamp: string
	content: T

	constructor() {}

	static success<T>(): ApiResponse<T> {
		return new ApiResponse<T>()
	}

	static error<T>(): ApiResponse<T> {
		return new ApiResponse<T>()
	}
}

class PaginatedApiResponse<T> {
	constructor() {}

	static success<T>(): PaginatedApiResponse<T> {
		return new PaginatedApiResponse<T>()
	}

	static error<T>(): PaginatedApiResponse<T> {
		return new PaginatedApiResponse<T>()
	}
}

export { ApiResponse, PaginatedApiResponse }
