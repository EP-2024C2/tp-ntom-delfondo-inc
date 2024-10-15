'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto_Componente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Producto_Componente.belongsTo(models.Producto)
      Producto_Componente.belongsTo(models.Componente)
    }
  }
  Producto_Componente.init({
    createdAt: DataTypes.DATE,
    updateAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Producto_Componente',
  });
  return Producto_Componente;
};