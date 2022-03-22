const express = require('express');
const app = express();
const path = require('path');
const PORT = 3030;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/views/index.html'))
})
app.get('/carrito', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/views/carritodecompras.html'))
})
app.get('/productdetail', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/views/productdetail.html'))
})
app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/views/register.html'))
})

app.listen(PORT, () => console.log(`
Servidor escuchando en el puerto ${PORT}
http://localhost:${PORT}
`))
