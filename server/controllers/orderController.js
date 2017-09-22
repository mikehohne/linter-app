import db from "./../models";


const orderController = {};

orderController.post = (req,res) => {

	const { cartId  } = req.body;


	const order = new db.Order({
		_cart: cartId
	});

	order.save()
		.then((newOrder) => {
			res.status(200).json({
				success: true,
				message: newOrder
			});
		})
		.catch((err) => {
			res.status(500).json({
				message: err
			});
		});
};

orderController.getAllOrders = (req,res) => {
	db.Order.find({})
		.populate({
			path: "_cart _cartItems"
		})
		.then((orders) => {
			return res.status(200).json({
				success: true,
				data: orders
			})
				.catch((err) => {
					return res.status(500).json({
						message: err
					});
				});
		});
};

export default orderController;