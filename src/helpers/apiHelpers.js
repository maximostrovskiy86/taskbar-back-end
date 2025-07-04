import {ValidationError} from "./error.js";

export const asyncWrapper = (controller) => {
	return (req, res, next) => {
		controller(req, res).catch(next);
	};
};

export const errorHandler = (error, req, res) => {
	if (error instanceof ValidationError) {
		return res.status(error.status).json({message: error.message});
	}
	
	res.status(500).json({message: error.message});
}