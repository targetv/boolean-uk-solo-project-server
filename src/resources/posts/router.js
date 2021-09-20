const express = require("express");
const { createPost, getPost } = require("./controller");

const router = express.Router();

router.post("/", createPost);
router.get("/", getPost);

module.exports = router;
