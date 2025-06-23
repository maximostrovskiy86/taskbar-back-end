import {registration, login} from "../services/authService.js";

export const registrationController = async (req, res) => {
	const {name, email, password} = req.body;
	
	await registration({email, password, name});
	
	res.json({status: "success"});
}


export const loginController = async (req, res) => {
	const {email, password} = req.body;
	
	const token = await login(email, password);
	
	res.json({status: "success", token});
}