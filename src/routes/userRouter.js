const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/userController');


//middlewares
const userLogged = require("../middlewares/userLogged");
const uploadAvatar = require("../middlewares/uploadAvatar");

//validations
const registerValidator =require("../validations/registerValidator");
const loginValidator = require("../validations/loginValidator");
const profileValidator = require("../validations/profileValidator")

router.get('/registro', userController.registro);

router.get('/login', userController.login);

router.get('/logout', userController.logout);


router.get("/register", userLogged, usersControllers.register);

router.post("/register", registerValidator ,usersControllers.processRegister);




module.exports = router;