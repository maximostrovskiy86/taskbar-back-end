export class ValidationError extends Error {
	constructor(message) {
		console.log("validation error::: ", message)
		super(message);
		this.status = 400;
	}
}

export class WrongParametersError extends ValidationError {
	constructor(message) {
		super(message);
		this.status = 400;
	}
}

export class NotAuthorizedError extends ValidationError {
	constructor(message) {
		console.log("validation error::: ", message)
		
		super(message);
		this.status = 401;
	}
}
