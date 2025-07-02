import {registration, login} from "../services/authService.js";

export const registrationController = async (req, res, next) => {
	const {userName, email, password} = req.body;
	
	const {isUserExist, newUser} = await registration({email, password, userName});
	
	if (isUserExist) {
		return res.status(409).json({
			status: 'error',
			code: 409,
			message: 'Email is already in use',
			data: 'Conflict',
		});
	}
	
	try {
		if (newUser) {
			res.status(201).json({
				statusText: "created",
				code: 201,
				user: newUser,
			});
		}
	} catch (error) {
		next(error.message);
	}
}

export const loginController = async (req, res) => {
	const {email, password} = req.body;
	
	const {token, user} = await login(email, password);
	
	if (!user) {
		return res.status(400).json({
			status: 'error',
			code: 400,
			message: 'Incorrect login or password',
			data: 'Bad request',
		});
	}
	
	res.status(200).json({
		status: "success",
		code: 200,
		accessToken: token,
		user
	});
}