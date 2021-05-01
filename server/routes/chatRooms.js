const router = require("express").Router();
const verify = require("./verifyToken");
const bcrypt = require("bcryptjs");
const ChatRoom = require("../models/Room");

router.get("/chatrooms", verify, async (req, res) => {
	try {
		const allRoomsCollection = await ChatRoom.find({});
		const roomsWithPrivateProp = allRoomsCollection.map((room) => {
			const { password, ...rest } = room.toJSON();
			return password
				? { ...rest, isPrivate: true }
				: { ...rest, isPrivate: false };
		});
		res.send({ chatRooms: roomsWithPrivateProp });
	} catch (err) {
		res.send(404).send("Rooms haven't found");
	}
});

router.post("/chatrooms/create", verify, async (req, res) => {
	const hashedPassword =
		req.body.password &&
		(await new Promise((resolve) =>
			(async () => {
				const salt = await bcrypt.genSalt(10);
				const hashedPassword = await bcrypt.hash(req.body.password, salt);
				resolve(hashedPassword);
			})(),
		));

	const newChatRoom = new ChatRoom({
		name: req.body.name,
		...(hashedPassword && { password: hashedPassword }),
		createdBy: req.body.createdBy,
		description: req.body.description,
		tags: [...req.body.tags],
	});
	try {
		newChatRoom.save();
		res.send("Chat room has been successfully created");
	} catch (err) {
		res.status(400).send(err);
	}
});

module.exports = router;
