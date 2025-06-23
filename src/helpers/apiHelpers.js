import {ValidationError, NotAuthorizedError} from "./error.js";

export const asyncWrapper = (controller) => {
	return (req, res, next) => {
		console.log("NEXT", next)
		
		controller(req, res).catch(next);
	};
};

export const errorHandler = (error, req, res, next) => {
	if (error instanceof ValidationError) {
		console.log("ERRORRRRRRRRRRR", error);
		return res.status(error.status).json({message: error.message});
	}
	
	res.status(500).json({message: error.message});
}