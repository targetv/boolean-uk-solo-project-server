const express = require("express");
const {
  createChannel,
  deleteChannel,
  updateChannel,
  getAllChannels,
} = require("./controller");

const router = express.Router();

router.post("/", createChannel);
router.delete("/", deleteChannel);
router.patch("/", updateChannel);
router.get("/", getAllChannels);

module.exports = router;
