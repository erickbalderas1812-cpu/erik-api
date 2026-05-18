const productos = require('../models/productosModel');

// GET TODOS
const obtenerProductos = (req, res) => {
  res.json(productos);
};

// GET POR ID
const obtenerProductoPorId = (req, res) => {

  const producto = productos.find(p => p.id == req.params.id);

  if (!producto) {
    return res.status(404).json({
      mensaje: 'Producto no encontrado'
    });
  }

  res.json(producto);
};

// POST
const crearProducto = (req, res) => {

  const nuevoProducto = {
    id: productos.length + 1,
    nombre: req.body.nombre,
    precio: req.body.precio
  };

  productos.push(nuevoProducto);

  res.status(201).json({
    mensaje: 'Producto creado correctamente',
    producto: nuevoProducto
  });
};

// PUT
const actualizarProducto = (req, res) => {

  const producto = productos.find(p => p.id == req.params.id);

  if (!producto) {
    return res.status(404).json({
      mensaje: 'Producto no encontrado'
    });
  }

  producto.nombre = req.body.nombre;
  producto.precio = req.body.precio;

  res.json({
    mensaje: 'Producto actualizado completamente',
    producto
  });
};

// PATCH
const actualizarParcialProducto = (req, res) => {

  const producto = productos.find(p => p.id == req.params.id);

  if (!producto) {
    return res.status(404).json({
      mensaje: 'Producto no encontrado'
    });
  }

  if (req.body.nombre) {
    producto.nombre = req.body.nombre;
  }

  if (req.body.precio) {
    producto.precio = req.body.precio;
  }

  res.json({
    mensaje: 'Producto actualizado parcialmente',
    producto
  });
};

// DELETE
const eliminarProducto = (req, res) => {

  const index = productos.findIndex(p => p.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({
      mensaje: 'Producto no encontrado'
    });
  }

  productos.splice(index, 1);

  res.json({
    mensaje: 'Producto eliminado correctamente'
  });
};

module.exports = {
  obtenerProductos,
  obtenerProductoPorId,
  crearProducto,
  actualizarProducto,
  actualizarParcialProducto,
  eliminarProducto
};