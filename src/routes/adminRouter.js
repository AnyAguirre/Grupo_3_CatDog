const express = require('express');
const router = express.Router( );
const adminProductsController = require('../controllers/admin/adminProductsController');

/* CRUD DE PRODUCTOS */

/* GET - LISTADO DE PRODUCTOS */
router.get('/productos', adminProductsController);
/* GET - CREACION DE PRODUCTO */
router.get('/productos/crear', adminProductsController);
/* GET - DETALLE DE PRODUCTO */
router.get('/productos/:id', adminProductsController);
/* POST - CREAR PRODUCTO */
router.post('/productos', adminProductsController);
/* GET - EDITAR PRODUCTO */
router.get('/productos/editar/:id', adminProductsController);
/* PUT - ACTUALIZAR PRODUCTO */
router.put('/productos/:id', adminProductsController);
/* DELETE - ELIMIAR UN PRODUCTO */
router.delete('/productos/eliminar/:id', adminProductsController);

module.exports = router;