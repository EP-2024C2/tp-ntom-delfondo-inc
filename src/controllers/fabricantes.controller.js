const { Model } = require('sequelize')
const { Fabricante } = require('../models/models')
const controller = {}
controller.fabricantes = Fabricante

const getAllMakers = async (req, res)=>{
    const fabricantes = await Fabricante.findAll({})
    res.status(200).json(fabricantes)
}
controller.getAllMakers = getAllMakers

const getMakerById = async (req, res)=>{
    const id = req.params.id
    const fabricante = await Fabricante.findOne({ 
        where: {id},
    })
    res.status(200).json(fabricante)
}
controller.getMakerById = getMakerById

const createMaker = async (req, res)=>{
    const { nombre,direccion,contacto,pathImgPerfil,productos } = req.body
    const fabricante = await Fabricante.create({
        nombre,
        direccion,
        contacto,
        pathImgPerfil,
        productos
    })
    res.status(201).json(fabricante)
}
controller.createMaker = createMaker

const updateMaker = async (req,res)=>{
    const id = req.params.id
    const { nombre,direccion,contacto,pathImgPerfil,productos } = req.body
    const fabricante = await Fabricante.findByPk(id)
    fabricante.nombre = nombre
    fabricante.direccion = direccion
    fabricante.contacto = contacto
    fabricante.pathImgPerfil = pathImgPerfil
    fabricante.productos = productos
    await Fabricante.save()
    res.status(200).json(fabricante)
}
controller.updateMaker = updateMaker

const deleteById = async (req,res)=>{
    const idBorrado = req.params.id
    const row = await Fabricante.destroy({
        where: {id:idBorrado}
    })
    res.status(200).json({mensaje: `fila borrada ${row}`})
}
controller.deleteById = deleteById

module.exports = controller