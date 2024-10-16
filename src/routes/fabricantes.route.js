const { Router } = require('express')
const route = Router()
const { fabricantesController } = require('../controllers/index')
const { fabricantesMiddleware } = require('../middlewares/index')
const schemaValidator = require('../middlewares/schemaValidator')
const fabricantesSchema= require('../schemas/fabricante.schema')

route.get('/fabricantes',fabricantesController.getAllMakers)
route.get('/fabricantes/:id',fabricantesMiddleware.validateIdMaker,fabricantesController.getMakerById)

route.post('/fabricantes', schemaValidator(fabricantesSchema),fabricantesController.createMaker)
route.put('/fabricantes/:id', schemaValidator(fabricantesSchema),fabricantesMiddleware.validateIdMaker,fabricantesController.updateMaker)
route.delete('/fabricantes/:id',fabricantesMiddleware.validateIdMaker,fabricantesController.deleteById) // Pendiente Status Code 500

// Tabla Intermedia
route.get('/fabricantes/:id/productos',fabricantesMiddleware.validateIdMaker,fabricantesController.getAllProductsMade) // Implementar controller.funcion

module.exports = route