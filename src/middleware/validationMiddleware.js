import Joi from "joi";
import {ValidationError} from "../helpers/error.js"

export const addTaskValidationSchema = (req, res, next) => {
	
	const schema = Joi.object({
		taskName: Joi.string()
			.alphanum()
			.min(1)
			.max(30)
			.required(),
		difficulty: Joi.string().required(),
		category: Joi.string().required(),
		taskDate: Joi.string().required(),
	});
	
	const validationResult = schema.validate(req.body);
	
	if (validationResult.error) {
		next(new ValidationError(validationResult.error.details[0].message));
	}
	
	next();
}
