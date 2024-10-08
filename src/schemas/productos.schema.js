const Joi = require('joi');
// const fabricanteSchema = require('./fabricante.schema'); 

const productoSchema = Joi.object().keys({
    id: Joi.number().integer().required().messages({
        "any.required": "El ID del producto es requerido",
        "number.base": "El ID del producto debe ser un número"
    }),
    nombre: Joi.string().required().min(3).max(100).messages({
        "any.required": "El nombre del producto es requerido",
        "string.min": "El nombre del producto debe tener como mínimo {#limit} caracteres",
        "string.max": "El nombre del producto debe tener como máximo {#limit} caracteres",
        "string.empty": "El nombre del producto no puede estar vacío"
    }),
    descripcion: Joi.string().required().min(10).max(255).messages({
        "any.required": "La descripción es requerida",
        "string.min": "La descripción debe tener como mínimo {#limit} caracteres",
        "string.max": "La descripción no puede exceder los {#limit} caracteres",
        "string.empty": "La descripción no puede ser vacia"
    }),
    precio: Joi.number().positive().precision(2).required().messages({
        "any.required": "El precio del producto es requerido",
        "number.base": "El precio debe ser un número",
        "number.positive": "El precio debe ser un número positivo",
        "number.precision": "El precio puede tener hasta 2 decimales"
    }),
    pathImg: Joi.string().required().messages({
        "any.required": "El path de la imagen es requerido",
    }),
    //fabricantes: Joi.array().items(fabricanteSchema).min(1).required().messages({
    //    "any.required": "Debe haber al menos un fabricante",
    //    "array.min": "Debe haber al menos {#limit} fabricante(s)"
    // })
}).unknown(false).messages({
    'object.unknown': 'El atributo {#label} no está permitido.'
});

module.exports = productoSchema;