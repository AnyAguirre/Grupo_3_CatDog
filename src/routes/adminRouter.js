const express = require('express');
const router = express.Router( );
const adminProductsController = require('../controllers/admin/adminProductsController');

/* CRUD DE PRODUCTOS */

/* GET - LISTADO DE PRODUCTOS */
router.get('/productos', adminProductsController.list);
/* GET - CREACION DE PRODUCTO */
router.get('/productos/create', adminProductsController.productCreate);
/* GET - DETALLE DE PRODUCTO */
router.get('/productos/:id', adminProductsController.detail);
/* POST - CREAR PRODUCTO */
router.post('/productos', adminProductsController.productAdd);
/* GET - EDITAR PRODUCTO */
router.get('/productos/editar/:id', adminProductsController.productEdit);
/* PUT - ACTUALIZAR PRODUCTO */
router.put('/productos/:id', adminProductsController.productUpdate);
/* DELETE - ELIMIAR UN PRODUCTO */
router.delete('/productos/eliminar/:id', adminProductsController.productDelete);

module.exports = router;