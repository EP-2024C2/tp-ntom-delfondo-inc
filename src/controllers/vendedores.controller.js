const vendedores = require('../../data/vendedores.json')
const controller = {}

const getAllVendors = (req, res)=>{
    res.status(200).json(vendedores)
}
controller.getAllVendors = getAllVendors

module.exports = controller