const express = require('express');
const app = express();
const path = require('path');
const PORT = 3030;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/views/index.html'))
})
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/views/carritodecompras'))
})

app.listen(PORT, () => console.log(`
Servidor escuchando en el puerto ${PORT}
http://localhost:${PORT}
`))
