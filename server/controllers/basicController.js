const basicController = {};

basicController.getAvatar = (req,res) => {
	res.json({
		message: "Welcome to our API!"
	});
};

export default basicController;

