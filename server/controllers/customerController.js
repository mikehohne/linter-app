import db from "./../models";


const customerController = {};

customerController.post = (req,res) => {

	const { companyName, shortName,  } = req.body;

	const customer = new db.Customer({
		companyName,
		shortName
	});

	customer.save()
		.then((newCustomer) => {
			res.status(200).json({
				success: true,
				message: newCustomer
			});
		})
		.catch((err) => {
			res.status(500).json({
				message: err
			});
		});
};

export default customerController;