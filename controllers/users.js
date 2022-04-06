const { Users } = require("../models");

createUser = async (req, res) => {
  try {
    let { name, email, password } = req.body;

    let newUser = await Users.create({
      name,
      email,
      password,
    });

    if (!name || !email || !password) {
      res.status(400).json({
        status: "error",
        message: "please fill all field",
        data: null,
      });
    }

    res.status(201).json({
      status: "success",
      message: "succesfully create data",
      data: newUser,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      errors: err,
    });
  }
};

getUsers = async (req, res) => {
  try {
    let users = await Users.findAll({ include: "channel" });

    res.status(200).json({
      status: "success",
      message: "succesfully get all data",
      data: users,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      errors: err.message,
    });
  }
};

getUser = async (req, res) => {
  try {
    const user_id = req.params.id;

    let user = await Users.findOne({
      include: "channel",
      where: {
        id: user_id,
      },
    });

    if (!user) {
      res.status(404).json({
        status: "error",
        message: "cant find user with id " + user_id,
        data: null,
      });
      return;
    }

    res.status(200).json({
      status: "success",
      message: "succesfully get detail data",
      data: user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      errors: err,
    });
  }
};

updateUser = async (req, res) => {
  try {
    const user_id = req.params.id;
    const { name, email, password } = req.body;

    let query = {
      where: {
        id: user_id,
      },
    };

    let updated = await Users.update(
      {
        name,
        email,
        password,
      },
      query
    );

    res.status(200).json({
      status: "success",
      message: "succesfully update data",
      data: updated,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      errors: err,
    });
  }
};

deleteUser = async (req, res) => {
  try {
    const user_id = req.params.id;

    let deleted = await Users.destroy({
      where: {
        id: user_id,
      },
    });

    res.status(200).json({
      status: "success",
      message: "succesfully delete data",
      data: deleted,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      errors: err,
    });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
