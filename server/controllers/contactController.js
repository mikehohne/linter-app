import db from "./../models";


const contactController = {};

contactController.post = (req,res) => {

	const { name, email, creator  } = req.body;

	const contact = new db.Contact({
		name,
		email,
		creator
	});
	contact.save()
		.then((newContact) => {
			res.status(200).json({
				success: true,
				message: newContact
			});
		})
		.catch((err) => {
			res.status(500).json({
				message: err
			});
		});
};

contactController.getAll = (req,res) => {
	db.Contact.find({}).populate({
		path: "_creator"
	}).then((contacts) => {
		return res.status(200).json({
			success: true,
			data: contacts
		});
	}).catch((err) => {
		res.status(500).json({
			message: err
		});
	});
};

export default contactController;