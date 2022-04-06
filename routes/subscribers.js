const express = require("express");
const router = express.Router();

const {
  addSubscriber,
  getSubscribers,
  deleteSubscriber,
} = require("../controllers/subscribers");

// CRUD
router.post("/", addSubscriber); // create user
router.get("/", getSubscribers); // getAll users
router.delete("/:id", deleteSubscriber); // delete user

module.exports = router;
