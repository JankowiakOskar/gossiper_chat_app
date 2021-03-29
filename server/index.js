const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
//Import Routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

const corsOptions = {
	origin: "http://localhost:3000",
	credentials: true, //access-control-allow-credentials:true
	optionSuccessStatus: 200,
};

mongoose.set("useUnifiedTopology", true);
dotenv.config();
app.use(cors(corsOptions));

//Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
	console.log("Connected to DB"),
);

//Middleware
app.use(express.json());

//Route Middlewares
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

// enable cors

app.listen(5000, () => console.log("Server running"));
