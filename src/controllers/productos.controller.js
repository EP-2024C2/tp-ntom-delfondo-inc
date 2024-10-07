const { Model } = require('sequelize')
const { Producto } = require('../models/models')
const controller = {}
controller.productos = Producto

const getAllProducts = async (req, res)=>{
    const productos = await Producto.findAll({})
    res.status(200).json(productos)
}
controller.getAllProducts = getAllProducts

const getProductById = async (req, res)=>{
    const id = req.params.id
    const producto = await Producto.findOne({ 
        where: {id},
    })
    res.status(200).json(producto)
}
controller.getProductById = getProductById

const createProduct = async (req, res)=>{
    const { nombre,descripcion,precio,pathImg,fabricantes } = req.body
    const producto = await Producto.create({
        nombre,
        descripcion,
        precio,
        pathImg,
        fabricantes
    })
    res.status(201).json(producto)
}
controller.createProduct = createProduct

const updateProducto = async (req,res)=>{
    const id = req.params.id
    const { nombre,descripcion,precio,pathImg,fabricantes } = req.body
    const producto = await Producto.findByPk(id)
    producto.nombre = nombre
    producto.descripcion = descripcion
    producto.precio = precio
    producto.pathImg = pathImg
    producto.fabricantes = fabricantes
    await Producto.save()
    res.status(200).json(producto)
}
controller.updateProducto = updateProducto

module.exports = controller