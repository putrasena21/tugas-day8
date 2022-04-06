const { Subscribers } = require("../models");

const addSubscriber = async (req, res) => {
  try {
    const { channel_id, user_id } = req.body;

    let newSubscriber = await Subscribers.create({
      channel_id,
      user_id,
    });

    res.status(201).json({
      status: "success",
      message: "succesfully create data",
      data: newSubscriber,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      errors: err,
    });
  }
};

const getSubscribers = async (req, res) => {
  try {
    let subscribers = await Subscribers.findAll();

    res.status(200).json({
      status: "success",
      message: "succesfully get all data",
      data: subscribers,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      errors: err.message,
    });
  }
};

const deleteSubscriber = async (req, res) => {
  try {
    const { id } = req.params;

    let subscriber = await Subscribers.findOne({
      where: {
        id,
      },
    });

    if (!subscriber) {
      return res.status(404).json({
        status: "error",
        message: "cant find subscriber with id " + channel_id,
        data: null,
      });
    } else {
      await subscriber.destroy();

      res.status(200).json({
        status: "success",
        message: "succesfully delete data",
        data: null,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      errors: err.message,
    });
  }
};

module.exports = {
  addSubscriber,
  getSubscribers,
  deleteSubscriber,
};
