"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Subscribers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Subscribers.belongsTo(models.Channels, {
        foreignKey: "channel_id",
      });
      Subscribers.belongsTo(models.Users, {
        foreignKey: "user_id",
        as: "subscriber",
      });
    }
  }
  Subscribers.init(
    {
      channel_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Subscribers",
    }
  );
  return Subscribers;
};
