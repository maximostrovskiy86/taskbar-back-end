import jwt from "jsonwebtoken";
import {NotAuthorizedError} from "../helpers/error.js";


export const authMiddleware = (req, res, next) => {
	const [tokenType, token] = req.headers.authorization.split(' ');
	
	if (!token) {
		throw new NotAuthorizedError('Please, provide token');
	}
	
	try {
		const user = jwt.decode(token, process.env.SECRET);
		
		req.user = user;
		req.token = token;
		next();
	} catch (error) {
		next(error);
	}
};