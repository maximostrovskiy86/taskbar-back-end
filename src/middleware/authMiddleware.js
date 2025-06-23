import jwt from "jsonwebtoken";
import {NotAuthorizedError} from "../helpers/error.js";



export const authMiddleware = (req, res, next) => {
	const [tokenType, token] = req.headers.authorization.split(' ');
	console.log('tokenType', tokenType,  token);
	
	if (!token) {
		next(new NotAuthorizedError('Please, provide token'));
	}
	
	console.log("req.headers", req.headers);
	
	try {
		const user = jwt.decode(token, process.env.SECRET);
		req.user = user;
		req.token = token;
		next();
	} catch (err) {
		next(new NotAuthorizedError('Invalid token'));
		
	}
};