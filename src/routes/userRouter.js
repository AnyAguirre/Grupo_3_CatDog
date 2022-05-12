const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/registro', userController.registro);
/* GET - Renderiza vista login */
router.get('/login', userController.login);
/* POST - loguea al usuario */

/*GET - Logout */
router.get('/logout', userController.logout);

module.exports = router;