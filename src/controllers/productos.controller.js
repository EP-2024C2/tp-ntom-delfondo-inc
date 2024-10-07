const productos = require('../../data/productos.json')
const controller = {}
controller.productos = productos

const getAllProducts = (req, res)=>{
    res.status(200).json(productos)
}
controller.getAllProducts = getAllProducts

const getProductById = (req, res)=>{
    const id = req.params.id
    const producto = productos.find( producto => producto.id==id)
    res.status(200).json(producto)
}
controller.getProductById = getProductById

const createProduct = (req, res)=>{
    const { nombre,descripcion,precio,pathImg,fabricantes } = req.body
    const ids = productos.map(p => p.id)
    const producto = {
        id: ids.length == 0 ? 1 : Math.max(...ids) + 1,
        nombre,
        descripcion,
        precio,
        pathImg,
        fabricantes
    }
    productos.push(producto)
    res.status(201).json(producto)
}
controller.createProduct = createProduct

module.exports = controller