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
      Subscribers.belongsTo(models.Channel, {
        foreignKey: "channel_id",
        as: "channel",
      });
      Subscribers.hasMany(models.Users, {
        foreignKey: "user_id",
        as: "subscribers",
      });
    }
  }
  Subscribers.init(
    {
      user_id: DataTypes.INTEGER,
      channel_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Subscribers",
    }
  );
  return Subscribers;
};
