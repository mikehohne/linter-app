import db from "./../models";
import validate from "./../helpers/helperMethods.js";


const cartController = {};

cartController.post = (req,res) => {

	const { userId } = req.body;


	const cart = new db.Cart({
		_creator: userId
	});

	cart.save()
		.then((newCart) => {
			res.status(200).json({
				success: true,
				message: newCart
			});
		})
		.catch((err) => {
			res.status(500).json({
				message: err
			});
		});
};

cartController.getAll = (req,res) => {
	let validated = false;
	db.Cart.find({}).populate({
		path: "_creator _cartItems"
	}).then((carts) =>{
		validated = validate.cart(carts);
		if(!validated){
			return res.status(200).json({
				success: false,
				message: "That cart is not valid"
			});
		}
		return res.status(200).json({
			success: true,
			data: carts
		});
	}).catch((err) => {
		res.status(500).json({
			message: err
		});
	});
};

export default cartController;