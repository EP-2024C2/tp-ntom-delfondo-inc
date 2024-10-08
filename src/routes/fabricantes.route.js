const { Router } = require('express')
const route = Router()
const { fabricantesController } = require('../controllers/index')
const { fabricantesMiddleware } = require('../middlewares/index')
const schemaValidator = require('../middlewares/schemaValidator')
// const fabricantesSchema= require('../schemas/fabricantes.schema') IMPLEMENTAR!

route.get('/fabricantes',fabricantesController.getAllMakers)
route.get('/fabricantes/:id',fabricantesMiddleware.validateIdMaker,fabricantesController.getMakerById)

route.post('/fabricantes',fabricantesController.createMaker) // Pendiente Status Code 400: schemaValidator(fabricantesSchema),
route.put('/fabricantes/:id',fabricantesMiddleware.validateIdMaker,fabricantesController.updateMaker)
route.delete('/fabricantes/:id',fabricantesMiddleware.validateIdMaker,fabricantesController.deleteById) // Pendiente Status Code 500

// Tabla Intermedia
route.get('/fabricantes/:id/productos',fabricantesController.getAllProductsMade) // Implementar controller.funcion y 404

module.exports = route