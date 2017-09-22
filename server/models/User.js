import mongoose from "mongoose";

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const UserSchema = new Schema({
	username: {
		type: String,
		required: true,
		minLength: [5,"Username must be 5 characters or more."]
	},
	password: {
		type: String,
		required: true,
		minLength: [5,"Password must be 8 characters or more."]
	},
});

// encryption will go here

const User = mongoose.model("User", UserSchema);

export default User;