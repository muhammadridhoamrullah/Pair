'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tag.belongsToMany(models.Post, { through: models.PostTag })
    }
  }
  Tag.init({
    nameTag: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg : 'Tag harus diisi!'
        },
        notEmpty: {
          msg : 'Tag harus diisi!'
        },
        isAlpha: {
          msg : 'Inputan harus huruf!'
        },
        len: {
          args: [2, 20],
          msg : 'Minimal inputan 2 karakter dan maksimal 20 karakter'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Tag',
  });
  return Tag;
};