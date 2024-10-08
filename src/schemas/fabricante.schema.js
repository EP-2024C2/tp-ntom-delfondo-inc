const Joi = require('joi');
// const productosSchema = require('./productos.schema'); 

const fabricanteSchema = Joi.object().keys({
    nombre: Joi.string().required().min(3).max(100).messages({
        "any.required": "El nombre del fabricante es requerido",
        "string.min": "El nombre del fabricante debe tener como mínimo {#limit} caracteres",
        "string.max": "El nombre del fabricante debe tener como máximo {#limit} caracteres",
        "string.empty": "El nombre del fabricante no puede estar vacío"
    }),
    direccion: Joi.string().required().messages({
        "any.required": "La dirección del fabricante es requerida",
        "string.empty": "La dirección no puede estar vacía"
    }),
    contacto: Joi.string().required().messages({
        "any.required": "El contacto del fabricante es requerido",
        "string.empty": "El contacto no puede estar vacío",
    }),
    pathImgPerfil: Joi.string().required().messages({
        "any.required": "El path de la imagen de perfil es requerido",
    })
    //productos: Joi.array().items(productosSchema).min(1).required().messages({
    //    "any.required": "Debe haber al menos un producto",
    //    "array.min": "Debe haber al menos {#limit} productos(s)"
    // })
});

module.exports = fabricanteSchema;