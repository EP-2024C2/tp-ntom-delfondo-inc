const Joi = require('joi');

const componenteSchema = Joi.object().keys({
    id: Joi.number().integer().required().messages({
        "any.required": "El ID del componente es requerido",
        "number.base": "El ID del componente debe ser un número"
    }),
    nombre: Joi.string().required().min(3).max(100).messages({
        "any.required": "El nombre del componente es requerido",
        "string.min": "El nombre del componente debe tener como mínimo {#limit} caracteres",
        "string.max": "El nombre del componente debe tener como máximo {#limit} caracteres",
        "string.empty": "El nombre del componente no puede estar vacío"
    }),
    descripcion: Joi.string().required().min(10).max(255).messages({
        "any.required": "La descripción es requerida",
        "string.min": "La descripción debe tener como mínimo {#limit} caracteres",
        "string.max": "La descripción no puede exceder los {#limit} caracteres",
        "string.empty": "La descripción no puede ser vacia"
    }),
}).unknown(false).messages({
    'object.unknown': 'El atributo {#label} no está permitido.'
});

module.exports = componenteSchema;
