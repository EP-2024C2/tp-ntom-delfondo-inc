const { Router } = require('express')
const route = Router()
const { fabricantesController } = require('../controllers/index')
const { fabricantesMiddleware } = require('../middlewares/index')
const schemaValidator = require('../middlewares/schemaValidator')
// const fabricantesSchema= require('../schemas/fabricantes.schema') IMPLEMENTAR!

route.get('/productos',fabricantesController.getAllMakers)
route.get('/productos/:id',fabricantesMiddleware.validateIdMaker,fabricantesController.getMakerById)

route.post('/productos',fabricantesController.createMaker) // Pendiente Status Code 400: schemaValidator(fabricantesSchema),
route.put('/productos/:id',fabricantesMiddleware.validateIdMaker,fabricantesController.updateMaker)
route.delete('/productos/:id',fabricantesMiddleware.validateIdMaker,fabricantesController.deleteById) // Pendiente Status Code 500

module.exports = route