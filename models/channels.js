"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Channels extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Channels.belongsTo(models.Users, {
        foreignKey: "id",
        as: "creator",
      });

      Channels.hasMany(models.Subscribers, {
        foreignKey: "channel_id",
      });
    }
  }
  Channels.init(
    {
      user_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Channels",
    }
  );
  return Channels;
};
