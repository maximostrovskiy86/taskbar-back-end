import Joi from "joi";
import {ValidationError} from "../helpers/error.js"

export const addTaskValidationSchema = (req, res, next) => {
	
	const schema = Joi.object({
		taskName: Joi.string()
			.alphanum()
			.min(3)
			.max(30)
			.required(),
		difficulty: Joi.string().required(),
		category: Joi.string().required(),
	});
	
	const validationResult = schema.validate(req.body);
	
	console.log("validationResultDETAILS", validationResult.error);
	
	// console.log("ValidationError", ValidationError)
	
	if (validationResult.error) {
		next(new ValidationError(validationResult.error.details[0].message));
	}
	
	next();
}

// export const updateTaskValidationSchema = (req, res, next) => {
//
// 	const schema = Joi.object({
// 		title: Joi.string()
// 			.alphanum()
// 			.min(3)
// 			.max(30)
// 			.optional(),
// 		level: Joi.string().optional(),
// 		category: Joi.string().optional(),
// 	});
//
// 	const validationResult = schema.validate(req.body);
//
// 	if (validationResult.error) {
// 		return res.status(400).json({status: validationResult.error.details});
// 	}
//
// 	next();
// }
