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
		console.log("NotAuthorizedError error::: ", message)
		
		super(message);
		this.status = 401;
	}
}

export class ConflictError extends ValidationError {
	constructor(message) {
		console.log(" ConflictError::: ", message)
		
		super(message);
		this.status = 409;
	}
}
