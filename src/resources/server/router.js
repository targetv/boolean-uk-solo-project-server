const express = require("express");

const {
  createServer,
  getServers,
  deleteServer,
  updateServer,
} = require("./controller");
const router = express.Router();

router.get("/:id", getServers);
router.post("/", createServer);
router.delete("/", deleteServer);
router.patch("/", updateServer);

module.exports = router;
