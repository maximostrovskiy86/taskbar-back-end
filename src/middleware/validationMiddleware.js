import Joi from "joi";

export const addTaskValidationSchema = (req, res, next) => {
	
	const schema = Joi.object({
		title: Joi.string()
			.alphanum()
			.min(3)
			.max(30)
			.required(),
		level: Joi.string().required(),
		category: Joi.string().required(),
	});
	
	const validationResult = schema.validate(req.body);
	
	if (validationResult.error) {
		return res.status(400).json({status: validationResult.error.details});
	}
	
	next();
}

export const updateTaskValidationSchema = (req, res, next) => {
	
	const schema = Joi.object({
		title: Joi.string()
			.alphanum()
			.min(3)
			.max(30)
			.optional(),
		level: Joi.string().optional(),
		category: Joi.string().optional(),
	});
	
	const validationResult = schema.validate(req.body);
	
	if (validationResult.error) {
		return res.status(400).json({status: validationResult.error.details});
	}
	
	next();
}
