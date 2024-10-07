const { Router } = require('express')
const route = Router()
const { productosController } = require('../controllers/index')
const { productosMiddleware } = require('../middlewares/index')
const schemaValidator = require('../middlewares/schemaValidator')
// const productosSchema= require('../schemas/productos.schema') IMPLEMENTAR!

route.get('/productos',productosController.getAllProducts)
route.get('/productos/:id',productosMiddleware.validateIdProduct,productosController.getProductById)

route.post('/productos',productosController.createProduct) // Pendiente Status Code 400: schemaValidator(productosSchema),

module.exports = route