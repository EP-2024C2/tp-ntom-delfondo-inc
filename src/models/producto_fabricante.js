'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto_Fabricante extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Producto_Fabricante.belongsTo(models.Producto)
      Producto_Fabricante.belongsTo(models.Fabricante)
    }
  }
  Producto_Fabricante.init({
    createdAt: DataTypes.DATE,
    updateAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Producto_Fabricante',
  });
  return Producto_Fabricante;
};