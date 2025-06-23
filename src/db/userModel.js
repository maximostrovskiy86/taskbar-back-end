import mongoose from 'mongoose';
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

const userSchema = new Schema({
		name: {
			type: String,
			// required: [true, "Name is required"],
			// required: true,
		},
		email: {
			type: String,
			// required: [true, "Email is required"],
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			// required: [true, "Password is required"],
		},
		token: {
			type: String,
			default: null,
		},
		// verify: {
		//   type: Boolean,
		//   default: false
		// },
		// verifyToken: {
		//   type: String,
		//   required: [true, "Verify token is required"]
		// }
	},
	// {typeKey: '$type'},
	// {versionKey: false, timestamp: true}
);

userSchema.pre("save", async function () {
	if (this.isNew) {
		this.password = await bcrypt.hash(this.password, 10);
	}
})


const User = mongoose.model('user', userSchema);

export default User;

