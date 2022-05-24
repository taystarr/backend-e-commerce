const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
// need require? in index.js
// const Product = require('./Product');
// const Tag = require('./Tag');

class ProductTag extends Model {}

ProductTag.init(
  {
    // id- integer, no null, set as primary key, auto increment
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // product_id- integer, reference product model's id
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    // tag_id- integer, references tag model's id
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;