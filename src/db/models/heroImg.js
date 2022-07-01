'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HeroImg extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Hero }) {
      HeroImg.belongsTo(Hero, {foreignKey: 'heroId'})
    }
  }
  HeroImg.init({
    imgPath: {type: DataTypes.STRING, allowNull: false}
  }, {
    sequelize,
    modelName: 'HeroImg',
    tableName: 'hero_imgs',
    underscored: true
  });
  return HeroImg;
};