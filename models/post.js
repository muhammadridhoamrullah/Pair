'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.User)
      Post.belongsToMany(models.Tag, { through: models.PostTag })
    }
  }
  Post.init({
    imgUrl: {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg : 'Image URL harus diisi!'
        },
        notEmpty: {
          msg : 'Image URL harus diisi!'
        },
        isUrl: {
          msg : 'Masukkan URL yang valid!'
        }
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg : 'Title harus diisi!'
        },
        notEmpty: {
          msg : 'Title harus diisi!'
        },
        len: {
          args: [3, 20],
          msg : 'Minimal 3 karakter dan maksimal 20 karakter'
        }
      }
    },
    caption: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg : 'Caption harus diisi!'
        },
        notEmpty: {
          msg : 'Caption harus diisi!'
        },
        len: {
          args: [8, 100],
          msg : 'Panjang minimal 8 karakter dan maksimal 100 karakter'
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg : 'UserId harus diisi!'
        },
        notEmpty: {
          msg : 'UserId harus diisi!'
        }
      }
    },
    like: {
      type: DataTypes.INTEGER,
      defaultValue: 0 // Menyertakan default value 0 untuk kolom like
    }
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};