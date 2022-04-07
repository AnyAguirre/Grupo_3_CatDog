module.exports = {
    index: (req, res) => res.render('index', {
        titulo: "CatDog"
    }),
    contacto: (req, res) => res.send("CONTACTO")
}