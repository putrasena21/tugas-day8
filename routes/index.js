const express = require("express");
const { append } = require("express/lib/response");
const router = express.Router();

const channel = require("./channels");
const user = require("./users");
const subscriber = require("./subscribers");

router.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "welcome to youtube api",
    data: null,
  });
});

router.use("/users", user);
router.use("/channels", channel);
router.use("/subscribers", subscriber);

module.exports = router;
