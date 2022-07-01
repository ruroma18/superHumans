'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({HeroImg}) {
      Hero.hasMany(HeroImg, {foreignKey: 'heroId'})
    }
  }
  Hero.init({
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      }
    },
    realName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'real_name',
      validate: {
        notNull: true,
        notEmpty: true,
      }
    },
    originDescription: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'origin_description',
      validate: {
        notNull: true,
        notEmpty: true,
      }
    },
    catchPhrase: {
      type: DataTypes.TEXT,
      field: 'catch_phrase',
    }
  }, {
    sequelize,
    modelName: 'Hero',
    tableName: 'heroes',
    underscored: true
  });
  return Hero;
};