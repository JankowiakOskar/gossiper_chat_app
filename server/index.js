const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const socket = require("socket.io");
//Import Routes
const authRoute = require("./routes/auth");
const chatRoomsRoute = require("./routes/chatRooms");
const { createMessage } = require("./utils/message");

mongoose.set("useUnifiedTopology", true);
dotenv.config();

// enable cors
app.use(cors());

//Connect to DB
mongoose.connect(
	process.env.DB_CONNECT,
	{ useCreateIndex: true, useNewUrlParser: true },
	() => console.log("Connected to DB"),
);

//Middleware
app.use(express.json());

//Route Middlewares
app.use("/api/user", authRoute);
app.use("/api/chat", chatRoomsRoute);

const PORT = 5000;
const HOST = "192.168.100.17";
const server = app.listen(PORT, HOST, () => {
	console.log(`server has started and listening on port: ${PORT}`);
});

const io = socket(server, {
	cors: {
		origin: "*",
	},
});

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
			createMessage(`${user}, has joined to chat, welcome!`, "Chat Bot"),
		);
		io.emit("users", users);
	});

	socket.on("message", (msg) => {
		const { name } = users.find((user) => user.id === socket.id);
		const newMsg = createMessage(msg, name);
		io.emit("message", newMsg);
	});

	socket.on("disconnect", () => {
		const { name } = users.find((user) => user.id === socket.id);
		const disconnectMsg = createMessage(
			`${name} has left from chat room`,
			"Chat Bot",
		);
		socket.broadcast.emit("message", disconnectMsg);
	});
});
