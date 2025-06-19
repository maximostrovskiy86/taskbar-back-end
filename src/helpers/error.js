export class ValidationError extends Error {
	constructor(message) {
		console.log("validation error", message)
		super(message);
		this.status = 400;
	}
}


export class WrongParametersError extends Error {
	constructor(message) {
		super(message);
		this.status(400);
	}
}

//
// class NotAuthorizedError extends Error {
//     constructor(message) {
//         super(message);
//         this.status(401);
//     }
// }

// export default {
// 	WrongParametersError,
// 	ValidationError
// }