const { Router } = require('express')
const route = Router()
const { componentesController } = require('../controllers/index')
const { componentesMiddleware } = require('../middlewares/index')
const schemaValidator = require('../middlewares/schemaValidator')
const componentesSchema= require('../schemas/componentes.schema')

route.get('/componentes',componentesController.getAllParts)
route.get('/componentes/:id',componentesMiddleware.validateIdPart,componentesController.getPartById)

route.post('/componentes', schemaValidator(componentesSchema), componentesController.createPart)
route.put('/componentes/:id', schemaValidator(componentesSchema), componentesMiddleware.validateIdPart,componentesController.updatePart)
route.delete('/componentes/:id',componentesMiddleware.validateIdPart,componentesController.deleteById) // Pendiente Status Code 500

// Tabla Intermedia
route.get('/componentes/:id/productos',componentesController.getAllProductsMadeWithPart) // Implementar controller.funcion y 404

module.exports = route
