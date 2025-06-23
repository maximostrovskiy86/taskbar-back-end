import jwt from "jsonwebtoken";
import {NotAuthorizedError} from "../helpers/error.js";
import bcrypt from "bcrypt";
import User from "../db/userModel.js";


export const registration = async ({name, email, password}) => {
	// const user = new User({name, email, password});
	// await user.save();
	const user = await User.create({name, email, password});
	// console.log("USER", user);
}



export const login = async (email, password) => {
	// console.log('LOGIN', email);
	const user = await User.findOne({email});
	console.log("USERLOGIN", user);
	if (!user) {re
		throw new NotAuthorizedError(`No user with email ${email} found`)
	}
	
	if (!await bcrypt.compare(password, user.password)) {
		throw new NotAuthorizedError(`Wrong password`)
	}
	
	const token = jwt.sign({
		_id: user._id,
		createdAt: user.createdAt,
	}, process.env.JWT_SECRET)
	
	return token;
}
