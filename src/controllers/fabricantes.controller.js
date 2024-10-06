const fabricantes = require('../../data/fabricantes.json')
const controller = {}

const getAllSuppliers = (req, res)=>{
    res.status(200).json(fabricantes)
}
controller.getAllSuppliers = getAllSuppliers

module.exports = controller