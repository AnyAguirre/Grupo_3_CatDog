const express = require('express');
const app = express();
const path = require('path');
const PORT = 3030;
const methodoverride = require('method-override');

app.use(express.static('public'));

/* Temple engine config */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


/*Enrutadores*/
const indexRouter = require('./routes/indexRouter');
const carritoRouter = require('./routes/carritoRouter')
const productosRouter = require('./routes/productosRouter');
const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter');


/*Rutas*/
app.use('/', indexRouter);
app.use('/carrito', carritoRouter);
app.use('/producto', productosRouter);
app.use('/user', userRouter);
app.use('/admin', adminRouter);


app.listen(PORT, () => console.log(`
Servidor escuchando en el puerto ${PORT}
http://localhost:${PORT}
`))
