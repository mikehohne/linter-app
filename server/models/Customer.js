import mongoose from "mongoose";

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const CustomerSchema = new Schema({
	companyName: {
		type: String,
		required: true,
		minLength: [3,"Company name must be 3 characters or more."]
	},
	shortName: {
		type: String,
		required: true,
		maxLength: [3,"short name must be 3"]
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
	}
});

// encryption will go here

const Customer = mongoose.model("Customer", CustomerSchema);

export default Customer;