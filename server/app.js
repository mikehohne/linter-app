import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./routes";

mongoose.connect(process.env.DB_CONNECTION_STRING, () => {
	console.log("Connected to Mongo...");
});

const app = express();

// Middleware

app.use(bodyParser.json());
app.use("/api", routes);

export default app;