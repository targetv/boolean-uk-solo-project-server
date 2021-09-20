const express = require("express");
const {
  sendFriendsRequests,
  getFriendsRequests,
  deleteFriendRequest,
} = require("./controller");
const router = express.Router();

router.post("/", sendFriendsRequests);
router.get("/", getFriendsRequests);
router.delete("/", deleteFriendRequest);

module.exports = router;
