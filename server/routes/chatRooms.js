const router = require("express").Router();
const verify = require("../middlewares/verifyToken");
const {
  getAllChatRooms,
  createChatRoom,
  signInToRoom,
} = require("../controllers/chatRooms");

router.get("/chatrooms", verify, getAllChatRooms);

router.post("/chatrooms", verify, createChatRoom);

router.post("/chatrooms/:id", verify, signInToRoom);

module.exports = router;
