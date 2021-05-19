const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const socket = require("socket.io");
const chatController = require("./controllers/chatController");
//Import Routes
const authRoute = require("./routes/auth");
const chatRoomsRoute = require("./routes/chatRooms");

mongoose.set("useUnifiedTopology", true);
dotenv.config();

// enable cors
app.use(cors());

//Connect to DB
mongoose.connect(
	process.env.DB_CONNECT,
	{ useCreateIndex: true, useNewUrlParser: true, useFindAndModify: false },
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

io.on("connect", (socket) => {
	chatController.joinRoom(io, socket);
	chatController.emitMessages(io, socket);
	chatController.leaveRoom(io, socket);
});
