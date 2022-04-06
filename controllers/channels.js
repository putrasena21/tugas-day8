const { Channels, Users } = require("../models");

createChannel = async (req, res) => {
  try {
    let { name, user_id } = req.body;

    let searchUser = await Channels.findOne({
      include: "creator",
      where: {
        user_id,
      },
    });

    let users = await Users.findOne({
      where: {
        id: user_id,
      },
    });

    if (!users) {
      res.status(404).json({
        status: "error",
        message:
          "can't create channel because can't find user with id " + user_id,
        data: null,
      });
      return;
    }

    if (searchUser) {
      return res.status(400).json({
        status: "error",
        message: "user already have channel",
        data: searchUser,
      });
    } else {
      let newChannel = await Channels.create({
        name,
        user_id,
      });

      return res.status(201).json({
        status: "success",
        message: "succesfully create data",
        data: newChannel,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      errors: err,
    });
    return;
  }
};

getChannels = async (req, res) => {
  try {
    let channels = await Channels.findAll({ include: "creator" });

    res.status(200).json({
      status: "success",
      message: "succesfully get all data",
      data: channels,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      errors: err.message,
    });
  }
};

getChannel = async (req, res) => {
  try {
    const channel_id = req.params.id;

    let channel = await Channels.findOne({
      include: "creator",
      where: {
        id: channel_id,
      },
    });

    if (!channel) {
      res.status(404).json({
        status: "error",
        message: "cant find channel with id " + channel_id,
        data: null,
      });
      return;
    }

    res.status(200).json({
      status: "success",
      message: "succesfully get detail data",
      data: channel,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      errors: err,
    });
  }
};

updateChannel = async (req, res) => {
  try {
    const channel_id = req.params.id;
    const { name } = req.body;

    let query = {
      where: {
        id: channel_id,
      },
    };

    let updated = await Channels.update(
      {
        name,
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

deleteChannel = async (req, res) => {
  try {
    const channel_id = req.params.id;

    let deleted = await Channels.destroy({
      where: {
        id: channel_id,
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
  createChannel,
  getChannels,
  getChannel,
  updateChannel,
  deleteChannel,
};
