const { Router } = require('express')
const route = Router()
const { productosController } = require('../controllers/index')
const { productosMiddleware } = require('../middlewares/index')
const schemaValidator = require('../middlewares/schemaValidator')
// const productosSchema= require('../schemas/productos.schema') IMPLEMENTAR!

route.get('/productos',productosController.getAllProducts)
route.get('/productos/:id',productosMiddleware.validateIdProduct,productosController.getProductById)

route.post('/productos',productosController.createProduct) // Pendiente Status Code 400: schemaValidator(productosSchema),
route.put('/productos/:id',productosMiddleware.validateIdProduct,productosController.updateProducto)
route.delete('/productos/:id',productosMiddleware.validateIdProduct,productosController.deleteById) // Pendiente Status Code 500

// Tablas Intermedias
route.post('/productos/:id/fabricantes',productosController.productMaker) // Implementar controller.funcion y 404,400
route.get('/productos/:id/fabricantes',productosController.getAllProductMaker) //Implementar controller.funcion y 404
route.post('/productos/:id/componentes',productosController.productParts) // Implementar controller.funcion y 404, 400
route.get('//productos/:id/componentes',productosController.getAllProductsParts) // Implementar controller.funcion y 404

module.exports = route