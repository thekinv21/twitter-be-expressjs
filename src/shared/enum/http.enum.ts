export enum HttpCodeEnum {
	OK = 200,
	CREATED = 201,
	ACCEPTED = 202,
	NO_CONTENT = 204,
	MOVED_PERMANENTLY = 301,
	FOUND = 302,
	NOT_MODIFIED = 304,
	BAD_REQUEST = 400,
	UNAUTHORIZED = 401,
	FORBIDDEN = 403,
	NOT_FOUND = 404,
	METHOD_NOT_ALLOWED = 405,
	CONFLICT = 409,
	UNPROCESSABLE_ENTITY = 422,
	INTERNAL_SERVER_ERROR = 500,
	SERVICE_UNAVAILABLE = 503
}

export enum HttpCodeMessageEnum {
	OK = 'OK',
	CREATED = 'CREATED',
	ACCEPTED = 'ACCEPTED',
	NO_CONTENT = 'NO CONTENT',
	MOVED_PERMANENTLY = 'MOVED PERMANENTLY',
	FOUND = 'FOUND',
	NOT_MODIFIED = 'NOT MODIFIED',
	BAD_REQUEST = 'BAD REQUEST',
	UNAUTHORIZED = 'UNAUTHORIZED',
	FORBIDDEN = 'FORBIDDEN',
	NOT_FOUND = 'NOT FOUND',
	METHOD_NOT_ALLOWED = 'METHOD NOT ALLOWED',
	CONFLICT = 'CONFLICT',
	UNPROCESSABLE_ENTITY = 'UNPROCESSABLE ENTITY',
	INTERNAL_SERVER_ERROR = 'INTERNAL SERVER ERROR',
	SERVICE_UNAVAILABLE = 'SERVICE UNAVAILABLE'
}

export enum HttpMethodEnum {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	PATCH = 'PATCH',
	DELETE = 'DELETE'
}

export enum HttpStatusEnum {
	SUCCESS = 'SUCCESS',
	FAILURE = 'FAILURE'
}
