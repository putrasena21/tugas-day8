const express = require("express");
const router = express.Router();

const channel = require("./channels");
const user = require("./users");

router.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "welcome to portal berita api",
    data: null,
  });
});

module.exports = router;
