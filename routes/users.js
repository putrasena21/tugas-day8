const express = require("express");
const router = express.Router();

const {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

// CRUD
router.post("/", createUser); // create user
router.get("/", getUsers); // getAll users
router.get("/:id", getUser); // getDetail user
router.put("/:id", updateUser); // update user
router.delete("/:id", deleteUser); // delete user

module.exports = router;
