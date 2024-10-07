const { Router } = require('express')
const route = Router()
const { componentesController } = require('../controllers/index')
const { componentesMiddleware } = require('../middlewares/index')
const schemaValidator = require('../middlewares/schemaValidator')
// const componentesSchema= require('../schemas/componentes.schema') IMPLEMENTAR!

route.get('/componentes',componentesController.getAllParts)
route.get('/componentes/:id',componentesMiddleware.validateIdPart,componentesController.getPartById)

route.post('/componentes',componentesController.createPart) // Pendiente Status Code 400: schemaValidator(componentesSchema),
route.put('/componentes/:id',componentesMiddleware.validateIdPart,componentesController.updatePart)
route.delete('/componentes/:id',componentesMiddleware.validateIdPart,componentesController.deleteById) // Pendiente Status Code 500

module.exports = route
