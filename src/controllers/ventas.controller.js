const ventas = require('../../data/ventas.json')
const controller = {}

const getAllSales = (req, res)=>{
    res.status(200).json(ventas)
}
controller.getAllSales = getAllSales

module.exports = controller