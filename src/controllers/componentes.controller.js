const componentes = require('../../data/componentes.json')
const controller = {}

const getAllVendors = (req, res)=>{
    res.status(200).json(componentes)
}
controller.getAllVendors = getAllVendors

module.exports = controller