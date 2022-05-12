const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/userController');


//middlewares
const userLogged = require("../middlewares/userInSessionCheck");
const uploadAvatar = require("../middlewares/uploadAvatar");

//validations
const registerValidator =require("../validations/registerValidator");


router.get('/registro', usersControllers.registro);

router.get('/login', usersControllers.login);

router.get('/logout', usersControllers.logout);


router.get("/register", userLogged, usersControllers.register);

router.post("/register", registerValidator ,usersControllers.processRegister);




module.exports = router;