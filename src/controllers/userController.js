module.exports = {
    registro: (req, res) => res.render('user/register', {
titulo: "Registrate",
session: req.session
    }),
    login: (req, res) => res.render('user/login', {
titulo: "Ingresa",
session: req.session
    }),

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