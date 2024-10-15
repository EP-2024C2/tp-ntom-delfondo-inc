const { Model } = require('sequelize')
const { Producto, Fabricante, Componente, Producto_Fabricante, Producto_Componente } = require('../models/models')
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
    await producto.save()
    res.status(200).json(producto)
}
controller.updateProducto = updateProducto

const deleteById = async (req,res)=>{
    const idBorrado = req.params.id
    const row = await Producto.destroy({
        where: {id:idBorrado}
    })
    res.status(200).json({mensaje: `fila borrada ${row}`})
}
controller.deleteById = deleteById

const productMaker = async (req, res)=>{
    const idProd = req.params.id
    const { id } = req.body
    const tabla = await Producto_Fabricante.create()
    const producto = await Producto.findOne({
        where: {id: idProd}
    })
    const fabricante = await Fabricante.findOne({
        where: {id}
    })
    await tabla.setProducto(producto)
    await tabla.setFabricante(fabricante)
    res.status(201).json(tabla)
}
controller.productMaker = productMaker

const getAllProductMaker = async (req, res)=>{
    const listado = [{}]
    res.status(200).json(listado)
}
controller.getAllProductMaker = getAllProductMaker

const productParts = async (req, res)=>{
    const idProd = req.params.id
    const { id } = req.body
    const tabla = await Producto_Componente.create()
    const producto = await Producto.findOne({
        where: {id: idProd}
    })
    const componente = await Componente.findOne({
        where: {id}
    })
    await tabla.setProducto(producto)
    await tabla.setComponente(componente)
    res.status(201).json(tabla)
}
controller.productParts = productParts

const getAllProductsParts = async (req, res)=>{
    const listado = [{}]
    res.status(200).json(listado)
}
controller.getAllProductsParts = getAllProductsParts

module.exports = controller