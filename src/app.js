const express = require('express');
const app = express();
const path = require('path');
const PORT = 3030;

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


/*Enrutadores*/
const indexRouter = require('./routes/indexRouter');
const carritoRouter = require('./routes/carritoRouter')
const productosRouter = require('./routes/productosRouter');
const userRouter = require('./routes/userRouter');


/*Rutas*/
app.use('/', indexRouter);
app.use('/carrito', carritoRouter);
app.use('/producto', productosRouter);
app.use('/user', userRouter);

app.listen(PORT, () => console.log(`
Servidor escuchando en el puerto ${PORT}
http://localhost:${PORT}
`))
