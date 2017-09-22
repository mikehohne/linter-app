import mongoose from "mongoose";

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const ContactSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		require: true
	},
	Phone: {
		type: String,
	},
	Address: {
		type: String,
	},
	isActive: {
		type: Boolean,
		default: false,
	},
	isDeleted: {
		type: Boolean,
		default: false
	},
	dateCreated: {
		type: Date,
		default: Date.now
	},
	isAdmin: {
		type: Boolean,
		default: false
	},
	creator: {
		type: Schema.ObjectId, ref: "Customer"
	}
});

// encryption will go here

const Contact = mongoose.model("Contact", ContactSchema);

export default Contact;