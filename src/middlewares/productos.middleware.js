const { productos } = require('../controllers/productos.controller')
const middleware = {}

const validateIdProduct = (req,res,next) => {
    const id = req.params.id
    const producto = productos.find(p => p.id == id)
    if (!producto)
       return res.status(404).json({mensaje: `El producto con Id ${id} no exite.`})
    next()
}
middleware.validateIdProduct = validateIdProduct

module.exports = middleware