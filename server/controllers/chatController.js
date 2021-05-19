const ChatRoom = require("../models/Room");
const { createMessage } = require("../utils/message");

const joinRoom = (io, socket) => {
	socket.on("joinRoom", async ({ user, roomId }) => {
		socket.join(roomId);
		console.log(socket);
		const { users, messages } = await ChatRoom.findOneAndUpdate(
			{ _id: roomId },
			{
				$addToSet: { users: [{ user, socketId: socket.id }] },
			},
			{ new: true },
		);
		io.to(roomId).emit(
			"newMessage",
			createMessage(`${user}, has joined to chat, welcome!`, "Chat Bot"),
		);
		io.in(roomId).emit("users", users);
		io.to(socket.id).emit("allMessages", messages);
	});
};

const emitMessages = (io, socket) => {
	socket.on("message", async (roomId, { sender, message }) => {
		const newMsg = createMessage(message, sender);
		await ChatRoom.findByIdAndUpdate(roomId, {
			$push: { messages: [newMsg] },
		});
		console.log(newMsg);
		io.in(roomId).emit("newMessage", newMsg);
	});
};

const leaveRoom = (io, socket) => {
	socket.on("disconnect", async () => {
		const { user, roomId } = socket.handshake.query;
		const disconnectMsg = createMessage(
			`${user} has left from chat room`,
			"Chat Bot",
		);
		const { users } = await ChatRoom.findOneAndUpdate(
			{ _id: roomId },
			{
				$pull: { users: { socketId: socket.id } },
			},
			{ new: true },
		);
		io.to(roomId).emit("users", users);
		io.to(roomId).emit("newMessage", disconnectMsg);
	});
};

module.exports = { joinRoom, emitMessages, leaveRoom };
