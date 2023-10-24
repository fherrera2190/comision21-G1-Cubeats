'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ArtistBeat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ArtistBeat.init({
    userId: DataTypes.INTEGER,
    beatId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ArtistBeat',
  });
  return ArtistBeat;
};