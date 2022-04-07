module.exports = {
    registro: (req, res) => res.render('user/register', {
titulo: "Registrate"
    }),
    login: (req, res) => res.render('user/login', {
titulo: "Ingresa"
    })




}