import * as firebase from "firebase";

const userController = {};

userController.post = (req,res) => {
	const { email, password } = req.body;

	const user = {
		email,
		password
	};

	firebase.auth()
		.createUserWithEmailAndPassword(user.email, user.password)
		.then((newUser) => {
			res.status(200)
				.json({
					success: true,
					data: newUser
				});
		})
		.catch((error) => {
			// Handle Errors here.
			res.status(error.code)
				.json({
					err: error.message
				});
		});
};

userController.getLoggedInUser = (req,res) => {
	firebase.auth().onAuthStateChanged((user) => {
		if (user) {
			res.json({
				message: user
			});
		} else {
			res.json({
				message: "No user is logged in"
			});
		}
	});
};

userController.signIn = (req,res) => {
	const { email, password } = req.body;
    
	// Validation
	const user = {
		email,
		password
	};

	firebase.auth().signInWithEmailAndPassword(user.email, user.password)
		.then((loggedInUser) => {
			res.status(200)
				.json({
					message: loggedInUser
				});
		})
		.catch((err) => {
			// Handle Errors here.
			res.status(500);
			res.json({
				message: err
			});
		});
};

export default userController;