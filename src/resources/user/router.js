const express = require("express");

const { User, createUser, deleteUser, updateUser } = require("./controller");

const router = express.Router();

router.get("/:id", User);
router.post("/", createUser);
router.delete("/", deleteUser);
router.patch("/", updateUser);

module.exports = router;
