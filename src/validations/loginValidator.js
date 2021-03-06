const {check, body} = require('express-validator');
const {users} = require('../data');
const bcrypt = require('bcryptjs');

let validateLogin = [
    check("email")
    .notEmpty().withMessage("Debe ingresar un mail").bail()
    .isEmail().withMessage("Ingrese un Email valido"),
    body("custom").custom((value, { req })=>{
        let user = users.find(user => user.email === req.body.email);
        if(bcrypt.compareSync(req.body.password, user.password)){
            return true;
        }
        return false;
    }).withMessage("Email o contraseña incorrecto"),
    check("password")
        .notEmpty().withMessage("Ingrese una contraseña"),
];

module.exports = validateLogin;