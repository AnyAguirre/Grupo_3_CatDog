const {getUsers, saveUsers} = require("../data/index");

const {validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");

module.exports = {
    registro: (req, res) => res.render('user/register', {
titulo: "Registrate",
session: req.session
    }),
    login: (req, res) => res.render('user/login', {
titulo: "Ingresa",
session: req.session
    }),
    register: (req,res) =>{
        res.render("users/register",{
            titulo:"Registrarme",
            session:req.session
        })
    },

    processRegister: (req, res)=>{
        
        errors = validationResult(req);

        if(errors.isEmpty()){
            let lastId = 0;

            getUsers.forEach(user => {
                if(user.id > lastId){
                    lastId = user.id
                }
            });

            let newUser = {
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password,12),
                avatar: req.file ? req.file.filename : "default.jpg"
            }

            getUsers.push(newUser)

            saveUsers(getUsers)

            res.redirect("/login")
        } else {
            res.render("users/register",{
                titulo:"Registrarme",
                errors: errors.mapped(),
                old:req.body,
                session:req.session
            })
        }

    },
    processLogin: (req, res) => {
        let user = user.find(user => user.email === req.body.email)
        req.session.user ={
            id: user.id,
            first_name: user.first_name,
            email: user.email,
            rol: user.rol
        }

        if(req.body.remember){
        const TIME_IN_MILISECONDS = 60000;
        res.cookie('catdogCookie', req.session.user, {
            expires: new Date(Date.now() + TIME_IN_MILISECONDS),
            httpOnly: true,
            secure: true
        })
    }

    res.locals.user = req.session.user

    res.redirect('/')
    },
    logout: (req,res) => {
        req.session.destroy();
        if(req.cookies.catdogCookie){
            res.cookie('catdogCookie', "", {max: -1})
        }
        res.redirect('/')
    }
}