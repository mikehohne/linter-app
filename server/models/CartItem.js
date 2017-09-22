import mongoose from "mongoose";

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const CartItemSchema = new Schema({
	_product: {
		type: Schema.ObjectId, ref:"Product"
	},
	_cart: {
		type: Schema.ObjectId, ref:"Cart"
	},
	quantity: {
		type: Number,
		default: 1
	}
});


const CartItem = mongoose.model("CartItem", CartItemSchema);

export default CartItem;