import db from "./../models";


const cartItemController = {};

cartItemController.post = (req,res) => {

	const { productId, cartId } = req.body;


	const cartItem = new db.CartItem({
		_product: productId,
		_cart: cartId
	});

	cartItem.save()
		.then((newCartItem) => {
			res.status(200).json({
				success: true,
				message: newCartItem
			});
		})
		.catch((err) => {
			res.status(500).json({
				message: err
			});
		});
};

cartItemController.getCartItems = (req,res) => {
	db.CartItem.find({}).populate({
		path: "_product"        
	})
		.then((currentCart) => {
			return res.status(200).json({
				success: true,
				data: currentCart
			})
				.catch((err) => {
					return res.status(500).json({
						message: err
					});
				});
		});
};

cartItemController.deleteCartItems = (req,res) => {

	var id = req.params.id;

	db.CartItem.remove({ _id: id})
		.then((response) => {
			res.status(200).json({
				success: true,
				message: response
			});
		})
		.catch((err) => {
			res.status(500).json({
				message: err
			});
		});
};


export default cartItemController;