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
router.get("/:id", getAllChannels);

module.exports = router;
