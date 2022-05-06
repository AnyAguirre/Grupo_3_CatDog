const { products, writeProducts, getProducts } = require('../../data');

const adminProductsController = {

    //Muestra la lista de productos
    list: (req, res) => {

        res.render('admin/listproduct', {
            products,
        })
    },
    //muestra detalle del producto en admin
    detail: (req, res) => {
        let productId = +req.params.id;
        let product = products.find(product => product.id === productId);

        res.render('admin/adminDetail', {
            product,
            products,
        })
    },
    //Envia la vista de formulario de la creacion de producto
    productAdd: (req, res) => {
        res.render('admin/addproduct')
    },
    //Recibe los datos del form de la creacion y lo guarda en la DB
    productCreate: (req, res) => {

        let lastId = 0;
        products.forEach(product => {
            if(product.id > lastId){
                lastId = product.id;
            }
        });

        let file = req.file;
        
        if(!file) {
            res.redirect('admin/productCreate')
        } else {

            let newProduct = {
                ...req.body, 
                id: lastId + 1,
                image: file.filename,
                stock: req.body.stock ? true : false
            }  
            Product.push(newProduct)
           writeProducts(products)
           res.redirect('/admin/producto')

        }
    },
    //edicion de producto
    productEdit: (req, res) => {

        let idProduct = +req.params.id;

        let product = getProducts.find(product => producto.id === idProduct)

        res.render('admin/editproduct', {
            titulo: "Edición",
            product,
        })
    },
    //Recibe datos actualizados del form de edicion
    productUpdate: (req, res) => {

        let idProduct = +req.params.id;

        let file = req.file

        if(!file) {
            Products.forEach(product => {
                if(producto.id === idProducto){
                    producto.name = req.body.name
                    producto.price = req.body.price
                    producto.discount = req.body.discount
                    producto.category = req.body.category
                    producto.stock = req.body.stock ? true : false
                    producto.description = req.body.description
                }
            });
            writeProducts(product);

        res.redirect('/admin/producto');

        } else {

            Products.forEach(product => {
                if(producto.id === idProducto){
                    producto.name = req.body.name
                    producto.price = req.body.price
                    producto.discount = req.body.discount
                    producto.category = req.body.category
                    producto.stock = req.body.stock ? true : false
                    producto.description = req.body.description
                }
            });

            writeProducts(products);

        res.redirect('/admin/producto');

        }
    },
    productDelete: (req, res) => {     

        let idProduct = +req.params.id;

        products.forEach(product => {
            if(producto.id === idProduct){  

                let productToDeleteIndex = getProducts.indexOf(product); 

                getProducts.splice(productToDeleteIndex, 1)
            }
        });

        writeProducts(products);

        res.redirect('/admin/producto')

    },
}

module.exports = adminProductsController;