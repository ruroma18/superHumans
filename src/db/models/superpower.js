'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superpower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Hero }) {
      Superpower.belongsToMany(Hero,
        {
          through: 'heroes_to_superpowers',
          foreignKey: 'superpowerId'
        })

    }
  }
  Superpower.init({
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: false,
        notEmpty: false
      }
    }
  }, {
    sequelize,
    modelName: 'Superpower',
    tableName: 'superpowers',
    underscored: true

  });
  return Superpower;
};