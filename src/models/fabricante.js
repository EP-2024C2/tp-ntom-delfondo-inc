'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fabricante extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Fabricante.belongsToMany(models.Producto, {through: 'Producto_Fabricante'})
    }
  }
  Fabricante.init({
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,
    contacto: DataTypes.STRING,
    pathImgPerfil: DataTypes.STRING
    }, {
    sequelize,
    modelName: 'Fabricante',
    timestamps: false
  });
  return Fabricante;
};