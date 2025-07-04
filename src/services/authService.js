import jwt from "jsonwebtoken";
import {NotAuthorizedError, ConflictError} from "../helpers/error.js";
import bcrypt from "bcrypt";
import User from "../db/userModel.js";

export const registration = async ({email, password, userName}) => {
	const isUserExist = await User.findOne({email});
	
	if (isUserExist) {
		throw new ConflictError(`Conflict, this email: ${email} already exist`)
	}
	
	const newUser = await User.create({email, password, userName});
	return {newUser, isUserExist};
}


export const login = async (email, password) => {
	const user = await User.findOne({email});
	if (!user) {
		throw new NotAuthorizedError(`No user with email ${email} found`)
	}
	
	if (!await bcrypt.compare(password, user.password)) {
		throw new NotAuthorizedError(`Wrong password`)
	}
	
	const payload = {
		_id: user._id,
		createdAt: user.createdAt,
	};
	
	const token = jwt.sign(
		payload,
		process.env.JWT_SECRET,
		{expiresIn: '12h'}
	)
	
	return {token, user};
}


