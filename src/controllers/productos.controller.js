const productos = require('../../data/productos.json')
const controller = {}

const getAllProducts = (req, res)=>{
    res.status(200).json(productos)
}
controller.getAllProducts = getAllProducts

module.exports = controller