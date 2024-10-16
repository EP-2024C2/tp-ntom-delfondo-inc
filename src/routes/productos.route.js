const { Router } = require('express')
const route = Router()
const { productosController } = require('../controllers/index')
const { productosMiddleware } = require('../middlewares/index')
const schemaValidator = require('../middlewares/schemaValidator')
const productosSchema= require('../schemas/productos.schema')

route.get('/productos',productosController.getAllProducts)
route.get('/productos/:id',productosMiddleware.validateIdProduct,productosController.getProductById)

route.post('/productos', schemaValidator(productosSchema), productosController.createProduct)
route.put('/productos/:id', schemaValidator(productosSchema), productosMiddleware.validateIdProduct,productosController.updateProducto)
route.delete('/productos/:id',productosMiddleware.validateIdProduct,productosController.deleteById) // Pendiente Status Code 500

// Tablas Intermedias
route.post('/productos/:id/fabricantes',productosMiddleware.validateIdProduct,productosController.productMaker) // falta 400?
route.get('/productos/:id/fabricantes',productosMiddleware.validateIdProduct,productosController.getAllProductMaker)
route.post('/productos/:id/componentes',productosMiddleware.validateIdProduct,productosController.productParts) // falta 400?
route.get('/productos/:id/componentes',productosMiddleware.validateIdProduct,productosController.getAllProductsParts)

module.exports = route