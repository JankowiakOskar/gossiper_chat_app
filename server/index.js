const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const socket = require("socket.io");
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

// enable cors
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

const PORT = 5000;
const server = app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
	console.log(`http://localhost:${PORT}`);
});

const io = socket(server, { cors: { ...corsOptions } });

io.on("connect", (socket) => {
	const users = [];

	socket.on("user", (user) => {
		const newUser = {
			id: socket.id,
			name: user,
		};
		users.push(newUser);

		socket.emit("users", users);
	});

	socket.on('message' msg => {
		const newMsg = {
			date: new Date().toString()
		}
	})
});
