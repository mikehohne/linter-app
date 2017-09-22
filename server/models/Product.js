import mongoose from "mongoose";
import shortId from "shortid";

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const ProductSchema = new Schema({
	productNumber: {
		type: String,
		required: true,
		default: shortId.generate
	},
	productName: {
		type: String,
		required: true
	},
	isActive: {
		type: Boolean,
		default: false
	},
	imageUrl: {
		type: String,
		required: true
	},
	isDeleted: {
		type: Boolean,
		default: false
	},
	stock: Number,
	price: Number,
	dateCreated: {
		type: Date,
		default: Date.now
	}
});


const Product = mongoose.model("Product", ProductSchema);

export default Product;