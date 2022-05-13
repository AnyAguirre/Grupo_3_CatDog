const {check, body} = require('express-validator');
const {users} = require('../data');

let validateLogin = [
    check("email")
    .notEmpty().withMessage("Email es requerido").bail()
    .isEmail().withMessage("Ingrese un Email valido"),
    body("custom").custom((value, { req })=>{
        let user = users.find(user => user.mail === req.body.email);
        if(user.pass === req.body.pass){
            return true;
        }
        return false;
    }).withMessage("Email o contraseña incorrecto"),
    check("password")
        .notEmpty().withMessage("Ingrese una contraseña"),
];

module.exports = validateLogin;