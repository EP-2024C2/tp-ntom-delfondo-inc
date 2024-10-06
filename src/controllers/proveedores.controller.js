const proveedores = require('../../data/proveedores.json')
const controller = {}

const getAllSuppliers = (req, res)=>{
    res.status(200).json(proveedores)
}
controller.getAllSuppliers = getAllSuppliers

module.exports = controller