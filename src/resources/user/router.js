const express = require("express");

const { Users, createUser, deleteUser, updateUser } = require("./controller");

const router = express.Router();

router.get("/", Users);
router.post("/", createUser);
router.delete("/", deleteUser);
router.patch("/", updateUser);

module.exports = router;
