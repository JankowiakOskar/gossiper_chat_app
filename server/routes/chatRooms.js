const router = require("express").Router();
const verify = require("../middlewares/verifyToken");
const {
  getAllChatRooms,
  createChatRoom,
  signInToRoom,
} = require("../controllers/chatRooms");

router.get("/chatrooms", verify, getAllChatRooms);

router.put("/chatrooms", verify, createChatRoom);

router.put("/chatrooms/:id", verfy, signInToRoom);

module.exports = router;
