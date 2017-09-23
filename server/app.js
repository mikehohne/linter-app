import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";

import routes from "./routes";

mongoose.connect(process.env.DB_CONNECTION_STRING, () => {
	console.log("Connected to Mongo...");
});

const app = express();

// Middleware
app.use(bodyParser.json());
app.use("/api", routes);
app.use(express.static(path.join(__dirname + "/public")));

export default app;