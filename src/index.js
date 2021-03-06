require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const userRouter = require("./resources/user/router");
const serverRouter = require("./resources/server/router");
const channelRouter = require("./resources/channels/router");
const postRouter = require("./resources/posts/router");
const friendsRequestRouter = require("./resources/friendRequests/router");
const auth = require("./resources/auth/router");

const app = express();

/* SETUP MIDDLEWARE */

app.disable("x-powered-by");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

/* SETUP ROUTES */

app.use("/", auth);
app.use("/user", userRouter);
app.use("/server", serverRouter);
app.use("/channel", channelRouter);
app.use("/post", postRouter);
app.use("/friendsrequest", friendsRequestRouter);

app.get("*", (req, res) => {
  res.json({ ok: true });
});

/* START SERVER */

const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`\nš Server is running on http://localhost:${port}/\n`);
});
