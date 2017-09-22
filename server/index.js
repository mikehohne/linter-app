import app from "./app";

// Connect to server here
app.listen(process.env.DEVPORT, () => {
	console.log("listening on port " + process.env.DEVPORT);
});
