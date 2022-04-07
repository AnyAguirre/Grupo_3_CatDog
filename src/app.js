const express = require('express');
const app = express();
const path = require('path');
const PORT = 3030;

app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.ejs'))
})
app.get('/carrito', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/productCart.ejs'))
})
app.get('/productdetail', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/productdetail.ejs'))
})
app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/register.ejs'))
})
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/login.ejs'))
})



app.listen(PORT, () => console.log(`
Servidor escuchando en el puerto ${PORT}
http://localhost:${PORT}
`))
