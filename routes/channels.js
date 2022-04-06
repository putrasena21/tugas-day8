const express = require("express");
const router = express.Router();

const {
  createChannel,
  getChannels,
  getChannel,
  updateChannel,
  deleteChannel,
} = require("../controllers/channels");

// CRUD
router.post("/", createChannel); // create user
router.get("/", getChannels); // getAll users
router.get("/:id", getChannel); // getDetail user
router.put("/:id", updateChannel); // update user
router.delete("/:id", deleteChannel); // delete user

module.exports = router;
