"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cd extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      cd.belongsTo(models.list);
      // define association here
    }
  }
  cd.init(
    {
      artist: DataTypes.STRING,
      album: DataTypes.STRING,
      releaseYear: DataTypes.STRING,
      albumCover: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "cd",
    }
  );
  return cd;
};
