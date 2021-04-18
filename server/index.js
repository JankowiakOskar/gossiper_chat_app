const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const socket = require("socket.io");
//Import Routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const { createMessage } = require("./utils/message");

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

const users = [];

io.on("connect", (socket) => {
	socket.on("new user", (user) => {
		const newUser = {
			id: socket.id,
			name: user,
		};
		users.push(newUser);
		socket.broadcast.emit(
			"message",
			createMessage(`${user}, has joined to chat, welcome!`),
		);
		io.emit("users", users);
	});

	socket.on("message", (msg) => {
		const { name } = users.find((user) => user.id === socket.id);
		const newMsg = createMessage(msg, name);
		io.emit("message", newMsg);
	});

	socket.on("disconnect", (user) => {
		const disconnectMsg = createMessage(`${user} has left from chat room`);
		socket.broadcast.emit("message", disconnectMsg);
	});
});
