const router = require("express").Router();
const verify = require("../middlewares/verifyToken");
const {
  createUser,
  signIn,
  sendUserCredentials,
} = require("../controllers/auth");

router.post("/register", createUser);

router.post("/login", signIn);

router.post("/", verify, sendUserCredentials);

module.exports = router;
