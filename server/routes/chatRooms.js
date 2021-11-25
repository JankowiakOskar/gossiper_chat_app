const router = require("express").Router();
const verify = require("../middlewares/verifyToken");
const { getAllChatRooms, createChatRoom } = require("../controllers/chatRooms");

router.get("/chatrooms", verify, getAllChatRooms);

router.put("/chatrooms", verify, createChatRoom);

module.exports = router;
