'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Producto.hasMany(models.Producto_Componente)
      Producto.hasMany(models.Producto_Fabricante)
    }
  }
  Producto.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    precio: DataTypes.NUMBER,
    pathImg: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Producto',
    timestamps: false
  });
  return Producto;
};